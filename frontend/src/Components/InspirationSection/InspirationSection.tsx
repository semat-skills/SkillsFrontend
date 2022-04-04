import React, { useRef, useState } from "react";
import { CardComp } from "../Card/Card";
import { Container } from "./InspirationSectionStyle";

interface InspirationSectionProps {
  //cards as props will be add after connection to db
}
type CardInfo = {
  img: string;
  title: string;
  text: string;
};

export const Inspiration: React.FC<InspirationSectionProps> = ({}) => {
  const InsparationSection = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [CardsArr, setCardsArr] = useState<CardInfo[]>([
    {
      img: "https://images.pexels.com/photos/2829336/pexels-photo-2829336.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Name",
      text: `Lizards are a widespread group of squamate reptiles, with over 6,000
  species, ranging across all continents except Antarctica`,
    },
    {
      img: "https://images.pexels.com/photos/6034584/pexels-photo-6034584.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Name",
      text: `Lizards are a widespread group of squamate reptiles, with over 6,000
  species, ranging across all continents except Antarctica`,
    },
    {
      img: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Name",
      text: `Lizards are a widespread group of squamate reptiles, with over 6,000
  species, ranging across all continents except Antarctica`,
    },
    {
      img: "https://images.pexels.com/photos/755871/pexels-photo-755871.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Name",
      text: `Lizards are a widespread group of squamate reptiles, with over 6,000
  species, ranging across all continents except Antarctica`,
    },
    {
      img: "https://images.pexels.com/photos/6034584/pexels-photo-6034584.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Name",
      text: `Lizards are a widespread group of squamate reptiles, with over 6,000
  species, ranging across all continents except Antarctica`,
    },
    {
      img: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Name",
      text: `Lizards are a widespread group of squamate reptiles, with over 6,000
  species, ranging across all continents except Antarctica`,
    },
    {
      img: "https://images.pexels.com/photos/755871/pexels-photo-755871.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Name",
      text: `Lizards are a widespread group of squamate reptiles, with over 6,000
  species, ranging across all continents except Antarctica`,
    },
  ]);
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
