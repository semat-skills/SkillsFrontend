import React from "react";
import { Footer } from "../../Components/Footer/Footer";
import { FunctionalBody } from "../../Components/Functional Body/FunctionalBody";
import Header from "../../Components/Header/Header";
import { Container } from "./FunctionalPage.style";

interface FunctionalPageProps {}

export const FunctionalPage: React.FC<FunctionalPageProps> = ({}) => {
  return (
    <Container>
      <Header />
      <FunctionalBody />
      <Footer />
    </Container>
  );
};
