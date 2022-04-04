import React from "react";
import { Container } from "./HomeContainer";
import Header from "../../Components/Header/Header";
import { MainBody } from "../../Components/Body of Homepage/MainBody";
import { Footer } from "../../Components/Footer/Footer";

const MainContainer: React.FC = () => {
  return (
    <Container>
      <Header />
      <MainBody />
      <Footer />
    </Container>
  );
};

export default MainContainer;
