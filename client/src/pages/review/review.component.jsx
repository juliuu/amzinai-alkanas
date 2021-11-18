import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ReviewContainer, ReviewWrapper, ReviewMainSection, ReviewHeadingWrapper, ImageCardWrapper } from './review.styles';
import { Footer, ImageCard, SideBar, ReviewScore, Comments } from '../../components';

const ReviewPage = () => {
  const { id } = useParams();

  const embedId = '05UQzZVd3SM'; // TODO: remove and add normal Id comng from youtube
  const sidebarSize = 3; // TODO: calculate based on screen height maybe?

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [sidebarData, setSidebarData] = useState(null);
  const [averageRating, setAverageRating] = useState(null);

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
        const data = await fetch(`/api/receptai/?sort=rating&offset=0&size=${sidebarSize}`).then((res) => res.json());

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
      <ReviewContainer>
        <ReviewWrapper>
          <ReviewMainSection>
            <ReviewHeadingWrapper>
              <h1>{data.heading.toUpperCase()}</h1>
              <h4>RESTORANO APŽVALGA</h4>
              {/* TODO: Hardcoded... */}
              <p>2021-08-11</p>
            </ReviewHeadingWrapper>
            <iframe
              src={`https://www.youtube.com/embed/${embedId}?rel=0&modestbranding=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                width: '50.7rem',
                height: '26.2rem',
                paddingBottom: '1.1rem',
              }} // TODO: border-radius: 1.5rem not really working
            ></iframe>
            {data.intro}
            <h2>MAISTO APŽVALGA</h2>
            <h3>Ragauti patiekalai:</h3>
            <ImageCardWrapper>
              {data.dishes.map((dish, index) => (
                <ImageCard key={index} name={dish.name} url={dish.url} />
              ))}
            </ImageCardWrapper>
            {data.review}
            <h3>MAISTO ĮVERTINIMAS</h3>
            {data.foodScores.map((score, index) => (
              <ReviewScore key={index} {...score} />
            ))}
            <h3>RESTORANO ĮVERTINIMAS</h3>
            {data.restaurantScores.map((score, index) => (
              <ReviewScore key={index} {...score} />
            ))}
            <br />
            <h3>GALUTINIS ĮVERTINIMAS</h3>
            <ReviewScore rating={averageRating} comment={data.finalRemarks} />
            <Comments id={id} />
          </ReviewMainSection>
          <SideBar title="Populiariausi receptai" linkTo="/receptai" linkText="Skaityti receptą">
            {sidebarData}
          </SideBar>
        </ReviewWrapper>
        <Footer />
      </ReviewContainer>
    );
  }
};

export default ReviewPage;
