import React, { useRef, useState } from "react";
import { Card } from "./Card/Card";
import { InsptDiv, TitleDiv } from "./InspirationSectionStyle";

interface InspirationSectionProps {}

export const Inspiration: React.FC<InspirationSectionProps> = ({}) => {
  // const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const handlePrev = () => {
    if (containerRef) {
      const container = containerRef.current;
      if (container) container.scrollLeft -= 130;
    }
  };
  const handleNext = () => {
    if (containerRef) {
      const container = containerRef.current;
      if (container) container.scrollLeft += 130;
    }
  };

  return (
    <InsptDiv>
      <div className="scroller">
        <TitleDiv>Hicking of The Week</TitleDiv>
        <div className="cards" ref={containerRef} id="cards">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      <div className="scroller-container">
        <div className="btns-scroller">
          <div className="scroller-btn" onClick={handlePrev}>
            &lt;
          </div>
          <div className="scroller-btn next" onClick={handleNext}>
            &gt;
          </div>
        </div>
      </div>
    </InsptDiv>
  );
};
