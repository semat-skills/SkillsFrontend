import React from "react";
import ContactForm from "../Form/FormikContact";
import { Container } from "./ContactBody..style";

interface ContactBodyProps {}

export const ContactBody: React.FC<ContactBodyProps> = ({}) => {
  return (
    <Container>
      <div className="contact-intro">
        <div className="section-title">Add New Card</div>
        <div className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          gravida scelerisque nunc senectus ac. Aliquam auctor lacinia
          pellentesque purus viverra dignissim. Vel quam varius.
        </div>
      </div>
      <div className="contact-form" data-testid="contentForm">
        <ContactForm />
      </div>
    </Container>
  );
};
