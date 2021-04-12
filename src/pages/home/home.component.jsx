import React from "react";

import { HomePageContainer } from "./home.styles";

import IntroSection from "../../components/introSection/introSection.component";
import PeviewSection from "../../components/previewSection/previewSection.component";
import TopSection from "../../components/topSection/topSection.component";
import AboutContainer from "../../components/aboutSection/aboutSection.component";

import homepageDetails from "../../assets/homepageDetails.json";

const getDetails = (id) => {
  return homepageDetails.find((item) => item.sectionId === id);
};

const HomePage = () => {
  return (
    <HomePageContainer>
      <IntroSection {...getDetails("introSection")} />
      {/* <PeviewSection {...getDetails("reviewSection")} /> */}
      <TopSection {...getDetails("topSection")} />
      {/* <PeviewSection {...getDetails("recipesSection")} /> */}
      {/* <AboutContainer /> */}
    </HomePageContainer>
  );
};

export default HomePage;
