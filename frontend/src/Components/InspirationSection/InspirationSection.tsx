import React, { useRef, useState } from "react";
import { CardComp } from "../Card/Card";
import { Container } from "./InspirationSectionStyle";
import cardData from "../../Consts/CardsData";

type CardInfo = {
  img: string;
  title: string;
  text: string;
};

export const Inspiration: React.FC = () => {
  const InsparationSection = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [CardsArr, setCardsArr] = useState<CardInfo[]>(cardData);

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
    <Container ref={InsparationSection}>
      <div className="scroller">
        <div className="title">Hiking of The Week</div>
        <div className="cards" ref={containerRef}>
          {CardsArr.map((card) => {
            return (
              <CardComp
                img={card.img}
                title={card.title}
                text={card.text}
              ></CardComp>
            );
          })}
        </div>
      </div>
      <div className="scroller-container">
        <div className="btns-scroller">
          <div className="scroller-btn prev" onClick={handlePrev}>
            &lt;
          </div>
          <div className="scroller-btn next" onClick={handleNext}>
            &gt;
          </div>
        </div>
      </div>
    </Container>
  );
};
