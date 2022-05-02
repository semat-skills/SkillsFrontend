import React from "react";
import { ContactBody } from "../../Components/ContactBody/ContactBody";
import { Footer } from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Container } from "./ContactPage.style";

interface ContactPageProps {}

export const ContactPage: React.FC<ContactPageProps> = ({}) => {
  return (
    <Container>
      <Header headerOf="functional" />
      <ContactBody />
      <Footer />
    </Container>
  );
};
