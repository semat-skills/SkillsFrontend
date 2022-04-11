import React from "react";
import { Inspiration } from "../InspirationSection/InspirationSection";
import Intro from "../IntroSection/IntroSection";
import { OurFeatures } from "../OurFeaturesSection/OurFeatures";
import { Container } from "./MainPageStyle";
import { Element } from "react-scroll";

export const MainBody: React.FC = () => {
  return (
    <Container>
      <Element id="intro" name="intro">
        <Intro />
      </Element>
      <Element id="insparation" name="insparation">
        <Inspiration />
      </Element>
      <Element id="features" name="features">
        <OurFeatures />
      </Element>
    </Container>
  );
};
