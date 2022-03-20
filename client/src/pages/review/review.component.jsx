import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  ReviewContainer,
  ReviewWrapper,
  IntroWrapper,
  ScoreWrapper,
  ReviewMainSection,
  ReviewHeadingWrapper,
  ImageCardWrapper,
} from './review.styles';
import { Footer, ImageCard, SideBar, ReviewScore, Comments, RatingBlock } from '../../components';
import { breakpoints } from '../../global.styles';

const ReviewPage = () => {
  const { id } = useParams();

  const embedId = '7j4WQ5qOBZY'; // TODO: remove and add normal Id comng from youtube (grab from db)
  const sidebarSize = 3; // TODO: calculate based on screen height maybe?

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [sidebarData, setSidebarData] = useState(null);
  const [averageRating, setAverageRating] = useState(null);
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
    if (size.width > breakpoints['_1200']) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  }, [size.width]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`/api/apzvalgos/${id}`).then((res) => res.json());

        setData(result.data);
        setAverageRating(result.averageRating);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`/api/receptai/?sort=rating&offset=0&size=${sidebarSize}`).then((res) =>
          res.json()
        );

        setSidebarData(data);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data && sidebarData) setIsLoaded(true);
  }, [data, sidebarData]);

  if (error) {
    return <div>Error: {error.message}</div>; // TODO: make a simple error page
  } else if (!isLoaded) {
    return <div>Loading...</div>; // TODO: make a cool loading component
  } else {
    return (
      <>
        <ReviewContainer>
          <ReviewWrapper>
            <ReviewMainSection>
              <ReviewHeadingWrapper>
                <h4>{data.heading.toUpperCase()}</h4>
                <h5>RESTORANO APŽVALGA</h5>
                <p>2021-08-11</p>
              </ReviewHeadingWrapper>
              <iframe
                src={`https://www.youtube.com/embed/${embedId}?rel=0&modestbranding=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>{data.intro}</p>
              <IntroWrapper>
                <h2>MAISTO APŽVALGA</h2>
                <h3>Ragauti patiekalai:</h3>
                <ImageCardWrapper>
                  {data.dishes.map((dish, index) => (
                    <ImageCard key={index} name={dish.name} url={dish.url} />
                  ))}
                </ImageCardWrapper>
                <p>{data.review}</p>
              </IntroWrapper>
              <ScoreWrapper>
                <h3>MAISTO ĮVERTINIMAS</h3>
                {data.foodScores.map((score, index) => (
                  <ReviewScore key={index} {...score} />
                ))}
              </ScoreWrapper>
              <ScoreWrapper>
                <h3>RESTORANO ĮVERTINIMAS</h3>
                {data.restaurantScores.map((score, index) => (
                  <ReviewScore key={index} {...score} />
                ))}
              </ScoreWrapper>
              <ScoreWrapper>
                <hr style={{ width: '100%', color: '#7A7A7A' }} />
                <h3>GALUTINIS ĮVERTINIMAS</h3>
                <ReviewScore rating={averageRating} comment={data.finalRemarks} />
              </ScoreWrapper>
              <RatingBlock id={id} type="review" />
              <Comments id={id} />
            </ReviewMainSection>
          </ReviewWrapper>
          {showSidebar && (
            <SideBar title="Populiariausi receptai:" linkTo="/receptai" linkText="Skaityti receptą">
              {sidebarData}
            </SideBar>
          )}
        </ReviewContainer>
        <Footer />
      </>
    );
  }
};

export default ReviewPage;
