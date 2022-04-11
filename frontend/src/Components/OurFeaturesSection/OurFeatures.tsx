import React from "react";
import { Container } from "./ourFeaturesStyle";
import { Stories } from "./Stories/Stories";

export const OurFeatures: React.FC = () => {
  return (
    <Container>
      <div className="sectionDescrption">
        <div className="section-title">Our Features</div>
        <div className="section-text">
          SkillsReads is the world’s largest site for readers and book
          recommendations. Our mission is to help people find and share books
          they love. Goodreads launched in January 2007.
        </div>
      </div>
      <div className="stories">
        <Stories />
      </div>
    </Container>
  );
};
