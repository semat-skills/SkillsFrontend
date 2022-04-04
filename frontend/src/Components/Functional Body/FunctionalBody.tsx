import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./FunctionalBody.style";
import { Button } from "../Button/Button";
import { CardComp } from "../Card/Card";

type CardInfo = {
  img: string;
  title: string;
  text: string;
};

export const FunctionalBody: React.FC = () => {
  let navigate = useNavigate();
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
  ]);
  return (
    <Container>
      <div className="functional-intro">
        <div className="section-title">Hikes Gallary</div>
        <div className="section-text">
          SkillsReads is the world’s largest site for readers and book
          recommendations. Our mission is to help people find and share books
          they love. Goodreads launched in January 2007.
        </div>
        <Button
          text="Add New Item"
          onClick={() => {
            navigate("/newcard");
          }}
        ></Button>
      </div>

      <div className="cards-results">
        <div className="section-title">All Results</div>
        <h4>Sort By</h4>
        <div className="filters">
          <div className="leftFilters">
            <div className="filter-btn">Date</div>
            <div className="filter-btn">Type</div>
            <div className="filter-btn">Price</div>
          </div>
          <div className="rightFilters">
            <div className="filter-btn push">
              <div className="active-btn"></div>Filter
            </div>
          </div>
        </div>

        <div className="cards">
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
    </Container>
  );
};
