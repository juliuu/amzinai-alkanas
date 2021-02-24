import React from "react";

import { HomePageContainer } from "./home.styles";

import IntroSection from "../../components/introSection/introSection.component";
import PeviewSection from "../../components/previewSection/previewSection.component";
import TopSection from "../../components/topSection/topSection.component";
import AboutContainer from "../../components/aboutSection/aboutSection.component";

import homepageDetails from "../../assets/homepageDetails.json";

const HomePage = () => {
  return (
    <HomePageContainer>
      <IntroSection
        {...homepageDetails.filter((item) => item.sectionId === "introSection")}
      />
      <PeviewSection
        {...homepageDetails.filter(
          (item) => item.sectionId === "reviewSection"
        )}
      />
      <TopSection />
      <PeviewSection
        {...homepageDetails.filter(
          (item) => item.sectionId === "recipesSection"
        )}
      />
      <AboutContainer />
    </HomePageContainer>
  );
};

export default HomePage;
