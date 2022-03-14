import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { PreviewPageContainer, PreviewWrapper, PreviewHeadingWrapper, CardWrapper } from './previews.styles';
import { Button, SectionCard, SideBar, PageSelector, Footer } from '../../components';
import { breakpoints } from '../../global.styles';
import previewPageDetails from '../../assets/data/previewPage.json';

import { toDate } from '../../utils';

const PreviewsPage = () => {
  const { pathname } = useLocation();

  const pageDetails = previewPageDetails[pathname];
  const maxCardCount = 9;
  const maxSidebarSize = 9;

  const [data, setData] = useState(null);
  const [cardCount, setCardCount] = useState(0);
  const [sidebarData, setSidebarData] = useState(null);
  const [filteredSidebar, setFilteredSidebar] = useState(null);
  const [type, setType] = useState(null);
  const [sort, setSort] = useState('rating');
  const [selectedPage, setSelectedPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [size, setSize] = useState({ width: window.innerWidth });
  const [showSidebar, setShowSidebar] = useState(false);

  const handleResize = () => {
    setSize({ width: window.innerWidth });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width > breakpoints['_900']) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  }, [size.width]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const offset = selectedPage * maxCardCount - maxCardCount;

        const [data, count] = await Promise.all([
          fetch(
            `/api${pathname}/?sort=${sort}&offset=${offset}&size=${maxCardCount}${
              type ? '&type=' + type : ''
            }`
          ).then((res) => res.json()),
          fetch(`/api${pathname}/total/${type ? '?type=' + type : ''}`).then((res) => res.json()),
        ]);

        setCardCount(count);
        setPageCount(Math.ceil(count / maxCardCount));
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

        const data = await fetch(`/api${sidebarPathname}/?sort=rating&offset=0&size=${maxSidebarSize}`).then(
          (res) => res.json()
        );

        setSidebarData(data);
        setFilteredSidebar(data);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };

    fetchData();
  }, [pathname, maxSidebarSize]);

  useEffect(() => {
    if (data && sidebarData) setIsLoaded(true);
  }, [data, sidebarData]);

  const calcSidebarLength = () => {
    let length;
    if (window.innerWidth >= 1716) length = Math.ceil(cardCount / 3);
    else if (window.innerWidth >= 1293) length = Math.ceil(cardCount / 2);
    else length = cardCount;

    return length;
  };

  useEffect(() => {
    if (sidebarData) {
      const sidebarLength = calcSidebarLength();
      setFilteredSidebar(sidebarData.slice(0, sidebarLength));
    }
  }, [window.innerWidth]);

  if (error) {
    return <div>Error: {error.message}</div>; // TODO: make a simple error page
  } else if (!isLoaded) {
    return <div>Loading...</div>; // TODO: make a cool loading component
  } else {
    return (
      <>
        <PreviewPageContainer>
          <PreviewWrapper>
            <PreviewHeadingWrapper>
              <div>
                <h1>{pageDetails.title.toUpperCase()}</h1>
              </div>
              <div>
                <Button
                  data-type="dropdown"
                  options={pageDetails.dropdowns.sorting}
                  onFilterChange={(value) => setSort(value)}
                />
              </div>
              <div>
                {pathname === '/apzvalgos' ? (
                  <Button
                    data-type="dropdown"
                    options={pageDetails.dropdowns.filtering}
                    onFilterChange={(value) => {
                      setType(value);
                      setSelectedPage(1);
                    }}
                  />
                ) : null}
              </div>
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
                  timestamp={toDate(article.timestamp)}
                />
              ))}
            </CardWrapper>
            <PageSelector
              onPageChange={(value) => setSelectedPage(value)}
              selectedPage={selectedPage}
              pageCount={pageCount}
            />
          </PreviewWrapper>
          {showSidebar && (
            <SideBar
              title={pageDetails.sidebar.title}
              linkTo={pageDetails.sidebar.linkTo}
              linkText={pageDetails.sidebar.linkText}
            >
              {filteredSidebar}
            </SideBar>
          )}
        </PreviewPageContainer>
        <Footer />
      </>
    );
  }
};

export default PreviewsPage;
