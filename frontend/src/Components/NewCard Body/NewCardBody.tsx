import React from "react";
import { Button } from "../Button/Button";
import { Container } from "./NewCardBody.style";
import CardForm from "./NewCardForm/CardForm";

interface NewCardBodyProps {}

export const NewCardBody: React.FC<NewCardBodyProps> = ({}) => {
  return (
    <Container>
      <div className="newcard-intro">
        <div className="section-title">Add New Card</div>
        <div className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          gravida scelerisque nunc senectus ac. Aliquam auctor lacinia
          pellentesque purus viverra dignissim. Vel quam varius.
        </div>
      </div>

      <div className="newCard-form">
        <CardForm />
      </div>
    </Container>
  );
};
