import React from "react";

import { HomePageContainer } from "./home.styles";

import Intro from "../../components/intro/intro.component";

import sectionDetails from "../../assets/sectionDetails.json";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Intro
        {...sectionDetails.filter((item) => item.sectionId === "introSection")}
      />
    </HomePageContainer>
  );
};

export default HomePage;
