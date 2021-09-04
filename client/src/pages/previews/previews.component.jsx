import React, { useState, useEffect } from 'react';

import { PreviewPageContainer, PreviewWrapper, PreviewMainSection, PreviewHeadingWrapper, CardWrapper } from './previews.styles';

import Dropdown from '../../components/dropdown/dropdown.component';
import Card from '../../components/sectionCard/sectionCard.component';
import SideBar from '../../components/sidebar/sidebar.component';
import PageSelector from '../../components/pageSelector/pageSelector.component';
import Footer from '../../components/footer/footer.component';

import reviews from '../../assets/data/reviews.json'; // TODO: replace with data coming from DB
import recipes from '../../assets/data/recipes.json'; // TODO: replace with data coming from DB
import previewPageDetails from '../../assets/data/previewPage.json'; // TODO: decide if should come from DB

const PreviewsPage = (props) => {
  const {
    location: { pathname },
  } = props;

  const pageDetails = previewPageDetails[pathname];
  const [filteredData, setFilteredData] = useState([]);
  const [sidebarContent, setSidebarContent] = useState([]);
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState('rating');
  const [selectedPage, setSelectedPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  
  useEffect(() => {
    let mainContent;
    // TODO: pull data from db
    const size = 9;
    const offset = selectedPage * size - size;

    if (pathname === '/apzvalgos') {
      mainContent = reviews;
      setSidebarContent(recipes);
    } else {
      mainContent = recipes;
      setSidebarContent(reviews);
    }

    const result = mainContent.sort((a, b) => b[sort] - a[sort]).filter((item) => ((filter && item.type) ? item.type === filter : true));

    setPageCount(Math.ceil(result.length / size));
    setFilteredData(result.slice(offset, selectedPage * size));
  }, [filter, sort, selectedPage, pathname]);

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
                setFilter(value);
                setSelectedPage(1);
              }}
            />
          </PreviewHeadingWrapper>
          <CardWrapper>
            {filteredData.map((article) => (
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
          {sidebarContent}
        </SideBar>
      </PreviewWrapper>
      <Footer />
    </PreviewPageContainer>
  );
};

export default PreviewsPage;
