import React from "react";
import { Container } from "./NewCardBody.style";
import CardForm from "./NewCardForm/CardForm";

export const NewCardBody: React.FC = () => {
  return (
    <Container data-testid='cardbody'>
      <div className="newcard-intro">
        <div className="section-title">Add New Card</div>
        <div className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          gravida scelerisque nunc senectus ac. Aliquam auctor lacinia
          pellentesque purus viverra dignissim. Vel quam varius.
        </div>
      </div>
      <div className="newCard-form" data-testid="cardForm">
        <CardForm  />
      </div>
    </Container>
  );
};
