import React from "react";

import { HomePageContainer } from "./home.styles";

import IntroSection from "../../components/introSection/introSection.component";
import PeviewSection from "../../components/previewSection/previewSection.component";
import TopSection from "../../components/topSection/topSection.component";
import AboutSection from "../../components/aboutSection/aboutSection.component";

import homepageDetails from "../../assets/homepageDetails.json";

const getDetails = (id) => {
  return homepageDetails.find((item) => item.sectionId === id);
};

const HomePage = ({ refs }) => {
  return (
    <HomePageContainer>
      <IntroSection {...getDetails("introSection")} />
      <PeviewSection {...getDetails("reviewSection")} />
      <TopSection refs={refs} {...getDetails("topSection")} />
      <PeviewSection {...getDetails("recipesSection")} />
      <AboutSection refs={refs} />
    </HomePageContainer>
  );
};

export default HomePage;
