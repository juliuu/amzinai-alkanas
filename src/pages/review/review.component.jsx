import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  ReviewContainer,
  ReviewWrapper,
  ReviewMainSection,
  ReviewHeadingWrapper,
  ImageCardWrapper,
} from "./review.styles";

import Footer from "../../components/footer/footer.component";
import ImageCard from "../../components/imageCard/imageCard.component";
import SideBar from "../../components/sidebar/sidebar.component";
import ReviewScore from "../../components/reviewScore/reviewScore.component";

import reviews from "../../assets/reviews.json"; // TODO: remove rating field from json when there is no need
import recipes from "../../assets/recipes.json";

const ReviewPage = () => {
  const { id } = useParams();

  const embedId = "05UQzZVd3SM"; // TODO: remove and add normal Id comng from youtube

  const [review, setReview] = useState({
    dishes: [],
    foodScore: [],
    restaurantScore: [],
  });

  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const result = reviews.find((review) => review.id === id);
    setReview(result);
    const averageFoodScore = 
      result.foodScore.reduce((acc, curr) => acc + curr.rating, 0) /
        result.foodScore.length
    ;
    const averageRestaurantScore = 
      result.restaurantScore.reduce((acc, curr) => acc + curr.rating, 0) /
        result.restaurantScore.length
    ;

    setAverageRating(Math.round((averageFoodScore + averageRestaurantScore) / 2));
  }, [id]);

  console.log("REVIEW --> ", review);
  return (
    <ReviewContainer>
      <ReviewWrapper>
        <ReviewMainSection>
          <ReviewHeadingWrapper>
            <h2>test heading</h2>
            <h4>RESTORANO APŽVALGA</h4>
            <p>2021-08-11</p>
          </ReviewHeadingWrapper>
          {/* https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2 */}
          <iframe
            src={`https://www.youtube.com/embed/${embedId}?rel=0&modestbranding=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            style={{
              width: "50.7rem",
              height: "26.2rem",
              "padding-bottom": "1.1rem",
            }} // TODO: border-radius: 1.5rem not really working
          />
          {review.intro}
          <h2>MAISTO APŽVALGA</h2>
          <h3>Ragauti patiekalai:</h3>
          <ImageCardWrapper>
            {review.dishes.map((dish, index) => (
              <ImageCard key={index} name={dish.name} url={dish.url} />
            ))}
          </ImageCardWrapper>
          {review.review}
          <h3>MAISTO ĮVERTINIMAS</h3>
          {review.foodScore.map((score, index) => (
            <ReviewScore key={index} {...score} />
          ))}
          <h3>RESTORANO ĮVERTINIMAS</h3>
          {review.restaurantScore.map((score, index) => (
            <ReviewScore key={index} {...score} />
          ))}
          <br />
          <h3>GALUTINIS ĮVERTINIMAS</h3>
          <ReviewScore rating={averageRating} comment={review.finalRemarks} />
        </ReviewMainSection>
        <SideBar
          title="Populiariausi receptai"
          linkTo="/receptai"
          linkText="Skaityti receptą"
        >
          {recipes}
        </SideBar>
      </ReviewWrapper>
      <Footer />
    </ReviewContainer>
  );
};

export default ReviewPage;
