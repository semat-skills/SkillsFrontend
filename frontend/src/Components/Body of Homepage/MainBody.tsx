import React, { useRef } from "react";
import { Inspiration } from "../InspirationSection/InspirationSection";
import Intro from "../IntroSection/IntroSection";
import { OurFeatures } from "../OurFeaturesSection/OurFeatures";
import * as S from "./MainPageStyle";
import { Element } from "react-scroll";


export const MainBody: React.FC = () => {
  const IntroSection = useRef<HTMLDivElement>(null);
  const InsparationSection = useRef<HTMLDivElement>(null);
  const FeaturesSection = useRef<HTMLDivElement>(null);

  return (
    <S.MainPageStyle>
      <Element id="intro" name="intro"> 
        <Intro
        // ref={IntroSection}
        ></Intro>
      </Element>
      <Element id="insparation" name="insparation">
        <Inspiration
        // ref={InsparationSection}
        ></Inspiration>
      </Element>
      <Element id="features" name="features">
        <OurFeatures
        // ref={FeaturesSection}
        ></OurFeatures>
      </Element>
    </S.MainPageStyle>
  );
};
