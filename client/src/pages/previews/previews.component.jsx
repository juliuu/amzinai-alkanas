import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {
  PreviewPageContainer,
  PreviewWrapper,
  PreviewMainSection,
  PreviewHeadingWrapper,
  CardWrapper,
} from './previews.styles';
import { Dropdown, SectionCard, SideBar, PageSelector, Footer } from '../../components';
import previewPageDetails from '../../assets/data/previewPage.json';

const PreviewsPage = () => {
  const { pathname } = useLocation();

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

        const [data, count] = await Promise.all([
          fetch(
            `/api${pathname}/?sort=${sort}&offset=${offset}&size=${pageSize}${type ? '&type=' + type : ''}`
          ).then((res) => res.json()), // TODO: rename filter
          fetch(`/api${pathname}/total/${type ? '?type=' + type : ''}`).then((res) => res.json()),
        ]);

        setPageCount(Math.ceil(count / pageSize));
        setData(data);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };

    fetchData();
  }, [type, sort, selectedPage, pathname]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sidebarPathname = pathname === '/apzvalgos' ? '/receptai' : '/apzvalgos';

        const data = await fetch(`/api${sidebarPathname}/?sort=rating&offset=0&size=${sidebarSize}`).then(
          (res) => res.json()
        );

        setSidebarData(data);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };

    fetchData();
  }, [pathname]);

  useEffect(() => {
    if (data && sidebarData) setIsLoaded(true);
  }, [data, sidebarData]);

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
              {pathname === '/apzvalgos' ? (
                <Dropdown
                  options={pageDetails.dropdowns.filtering}
                  onFilterChange={(value) => {
                    setType(value);
                    setSelectedPage(1);
                  }}
                />
              ) : null}
            </PreviewHeadingWrapper>
            <CardWrapper>
              {data.map((article) => (
                <SectionCard
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
            <PageSelector
              onPageChange={(value) => setSelectedPage(value)}
              selectedPage={selectedPage}
              pageCount={pageCount}
            />
          </PreviewMainSection>
          <SideBar
            title={pageDetails.sidebar.title}
            linkTo={pageDetails.sidebar.linkTo}
            linkText={pageDetails.sidebar.linkText}
          >
            {sidebarData}
          </SideBar>
        </PreviewWrapper>
        <Footer />
      </PreviewPageContainer>
    );
  }
};

export default PreviewsPage;
