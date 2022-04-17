import React from "react";
import { Container } from "./ourFeaturesStyle";
import { Stories } from "./Stories/Stories";

export const OurFeatures: React.FC = () => {
  return (
    <Container>
      <div className="sectionDescrption">
        <div className="section-title">Our Features</div>
        <div className="section-text">
        Hikers is the world’s largest site for hiking and trails
          recommendations. Our mission is to help people find and share trails
          they love. Hikers launched in March 2022.
        </div>
      </div>
      <div className="stories" data-testid="stories">
        <Stories  />
      </div>
    </Container>
  );
};
