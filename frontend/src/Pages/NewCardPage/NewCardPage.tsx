import React from "react";
import { Footer } from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { NewCardBody } from "../../Components/NewCard Body/NewCardBody";
import { Container } from "./NewCardPage.style";

interface NewCardPageProps {}

export const NewCardPage: React.FC<NewCardPageProps> = ({}) => {
  return (
    <Container>
      <Header />
      <NewCardBody/>
      <Footer />
    </Container>
  );
};
