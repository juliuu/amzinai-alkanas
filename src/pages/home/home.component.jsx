import React from 'react';

import { HomePageContainer } from './home.styles';

import IntroSection from '../../components/introSection/introSection.component';
import PeviewSection from '../../components/previewSection/previewSection.component';
import TopSection from '../../components/topSection/topSection.component';
import AboutSection from '../../components/aboutSection/aboutSection.component';

import homepageDetails from '../../assets/data/homepageDetails.json';
import reviews from '../../assets/data/reviews.json';
import recipes from '../../assets/data/recipes.json';

const getDetails = (id, data = null) => {
  const result = { ...homepageDetails.find((item) => item.sectionId === id) };

  if (data) result.data = data;
  return result;
};

const HomePage = ({ refs }) => {
  return (
    <HomePageContainer>
      <IntroSection {...getDetails('introSection')} />
      <PeviewSection {...getDetails('reviewSection', reviews)} />
      <TopSection refs={refs} {...getDetails('topSection', reviews)} />
      <PeviewSection {...getDetails('recipesSection', recipes)} />
      <AboutSection refs={refs} />
    </HomePageContainer>
  );
};

export default HomePage;
