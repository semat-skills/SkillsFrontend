import React from "react";
import { Footer } from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { NewCardBody } from "../../Components/NewCard Body/NewCardBody";
import { Container } from "./NewCardPage.style";

export const NewCardPage: React.FC = () => {
  return (
    <Container>
      <Header headerOf='newCard'/>
      <NewCardBody />
      <Footer />
    </Container>
  );
};
