import React from "react";
import { Footer } from "../../Components/Footer/Footer";
import { FunctionalBody } from "../../Components/Functional Body/FunctionalBody";
import Header from "../../Components/Header/Header";
import { Container } from "./FunctionalPage.style";

export const FunctionalPage: React.FC = () => {
  return (
    <Container>
      <Header headerOf='functional'/>
      <FunctionalBody />
      <Footer />
    </Container>
  );
};
