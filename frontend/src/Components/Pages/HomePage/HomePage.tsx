import React from "react";
import { HomeContainer } from "../../styles/HomeContainer";
import Header from "../../Features/Header/Header";
import { MainPage } from "../../Features/MainPage/MainPage";
import { Footer } from "../../Features/Footer/Footer";

interface MainContainerProps {}

const MainContainer: React.FC<MainContainerProps> = ({}) => {
  return (

    <HomeContainer>

      <Header />
      <MainPage />
      <Footer />
    </HomeContainer>
  );
};


export default MainContainer;
