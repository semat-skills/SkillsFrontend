import React from "react";
import { HomeContainer } from "../../styles/HomeContainer";
import Header from "../../Features/Header/Header";
import { MainPage } from "../../Features/MainPage/MainPage";
import { Footer } from "../../Features/Footer/Footer";
import Navbar from "../../Features/Header/IndexNavbar";
interface MainContainerProps {}

const MainContainer: React.FC<MainContainerProps> = ({}) => {
  return (
    // <Navbar fixed></Navbar>

    <HomeContainer>
      {/* <Navbar></Navbar> */}
      <Header />
      <MainPage />
      <Footer />
    </HomeContainer>
  );
};


export default MainContainer;
// <FlexBox>
// <Navbar></Navbar>
// <Header/>
// <MainPage/>
// <Footer/>
// </FlexBox>
