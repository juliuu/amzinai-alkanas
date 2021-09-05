import React, { useState, useEffect } from 'react';

import { PreviewPageContainer, PreviewWrapper, PreviewMainSection, PreviewHeadingWrapper, CardWrapper } from './previews.styles';

import Dropdown from '../../components/dropdown/dropdown.component';
import Card from '../../components/sectionCard/sectionCard.component';
import SideBar from '../../components/sidebar/sidebar.component';
import PageSelector from '../../components/pageSelector/pageSelector.component';
import Footer from '../../components/footer/footer.component';

import previewPageDetails from '../../assets/data/previewPage.json';

const PreviewsPage = (props) => {
  const {
    location: { pathname },
  } = props;

  const pageDetails = previewPageDetails[pathname];
  const pageSize = 9;
  const sidebarSize = 3; // TODO: calculate based on screen height maybe?

  const [data, setData] = useState(null);
  const [sidebarData, setSidebarData] = useState(null);
  const [type, setType] = useState(null);
  const [sort, setSort] = useState('rating');
  const [selectedPage, setSelectedPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const offset = selectedPage * pageSize - pageSize;
        const sidebarPathname = pathname === '/apzvalgos' ? '/receptai' : '/apzvalgos';

        const [data, count, sidebarData] = await Promise.all([
          fetch(`/api${pathname}/?sort=${sort}&offset=${offset}&size=${pageSize}${type ? '&type=' + type : ''}`).then((res) => res.json()), // TODO: rename filter
          fetch(`/api${pathname}/total/${type ? '?type=' + type : ''}`).then((res) => res.json()),
          fetch(`/api${sidebarPathname}/?sort=rating&offset=0&size=${sidebarSize}`).then((res) => res.json()),
        ]);

        setPageCount(Math.ceil(count / pageSize));
        setData(data);
        setSidebarData(sidebarData);
        setIsLoaded(true);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };

    fetchData();
  }, [type, sort, selectedPage, pathname]);

  if (error) {
    return <div>Error: {error.message}</div>; // TODO: make a simple error page
  } else if (!isLoaded) {
    return <div>Loading...</div>; // TODO: make a cool loading component
  } else {
    return (
      <PreviewPageContainer>
        <PreviewWrapper>
          <PreviewMainSection>
            <PreviewHeadingWrapper>
              <Dropdown options={pageDetails.dropdowns.sorting} onFilterChange={(value) => setSort(value)} />
              <h2>{pageDetails.title.toUpperCase()}</h2>
              <Dropdown
                options={pageDetails.dropdowns.filtering}
                onFilterChange={(value) => {
                  setType(value);
                  setSelectedPage(1);
                }}
              />
            </PreviewHeadingWrapper>
            <CardWrapper>
              {data.map((article) => (
                <Card
                  key={article._id}
                  imgUrl={article.imgUrl}
                  heading={article.heading}
                  intro={article.intro}
                  rating={article.rating}
                  to={`${pageDetails.to}/${article._id}`}
                  linkText={pageDetails.linkText}
                />
              ))}
            </CardWrapper>
            <PageSelector onPageChange={(value) => setSelectedPage(value)} selectedPage={selectedPage} pageCount={pageCount} />
          </PreviewMainSection>
          <SideBar title={pageDetails.sidebar.title} linkTo={pageDetails.sidebar.linkTo} linkText={pageDetails.sidebar.linkText}>
            {sidebarData}
          </SideBar>
        </PreviewWrapper>
        <Footer />
      </PreviewPageContainer>
    );
  }
};

export default PreviewsPage;
