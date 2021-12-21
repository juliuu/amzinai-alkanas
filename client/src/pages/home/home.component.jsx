import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { HomePageContainer } from './home.styles';
import { IntroSection, PreviewSection, TopSection, AboutSection } from '../../components';
import homepageDetails from '../../assets/data/homepageDetails.json';

const HomePage = () => {
  // TODO: think on better approach to get home page details
  const reviewSection = homepageDetails['reviewSection'];
  const recipeSection = homepageDetails['recipeSection'];
  const topSection = homepageDetails['topSection'];
  const introSection = homepageDetails['introSection'];

  const [reviewFilter, setReviewFilter] = useState(reviewSection.dropdown[0]._id);
  const [recipeFilter, setRecipeFilter] = useState(recipeSection.dropdown[0]._id);
  const [topFilter, setTopFilter] = useState(topSection.dropdown[0]._id);
  const [reviews, setReviews] = useState(null);
  const [recipes, setRecipes] = useState(null);
  const [tops, setTops] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const { hash } = useLocation();

  // Fetch reviews
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviews = await fetch(`/api/apzvalgos/?sort=${reviewFilter}&offset=0&size=3`).then((res) =>
          res.json()
        );

        setReviews(reviews);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };

    fetchData();
  }, [reviewFilter]);

  // Fetch top list
  useEffect(() => {
    const fetchData = async () => {
      try {
        const tops = await fetch(`api/apzvalgos/top/?type=${topFilter}`).then((res) => res.json());

        setTops(tops);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };

    fetchData();
  }, [topFilter]);

  // Fetch recipes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipes = await fetch(`/api/receptai/?sort=${recipeFilter}&offset=0&size=3`).then((res) =>
          res.json()
        );

        setRecipes(recipes);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };

    fetchData();
  }, [recipeFilter]);

  useEffect(() => {
    if (reviews && recipes && tops) setIsLoaded(true);
  }, [reviews, recipes, tops]);

  useEffect(() => {
    if (isLoaded && hash) {
      let elem = document.getElementById(hash);
      if (elem) {
        elem.scrollIntoView();
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [isLoaded, hash]);

  const onChange = (e, type) => {
    switch (type) {
      case 'reviewSection':
        setReviewFilter(e);
        break;
      case 'recipeSection':
        setRecipeFilter(e);
        break;
      case 'topSection':
        setTopFilter(e);
        break;
      default:
        break;
    }
  };

  // TODO: review.rating is passed in, not calculated - should be calculated!!

  if (error) {
    return <div>Error: {error.message}</div>; // TODO: make a simple error page
  } else if (!isLoaded) {
    return <div>Loading...</div>; // TODO: make a cool loading component
  } else {
    return (
      <HomePageContainer>
        <IntroSection {...introSection} />
        <PreviewSection onChange={(e) => onChange(e, 'reviewSection')} data={reviews} {...reviewSection} />
        <TopSection onChange={(e) => onChange(e, 'topSection')} data={tops} {...topSection} />
        <PreviewSection onChange={(e) => onChange(e, 'recipeSection')} data={recipes} {...recipeSection} />
        <AboutSection />
      </HomePageContainer>
    );
  }
};

export default HomePage;
