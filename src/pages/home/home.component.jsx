import React from "react";

import { HomePageContainer } from "./home.styles";

import Intro from "../../components/intro/intro.component";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Intro />
    </HomePageContainer>
  );
};

export default HomePage;
