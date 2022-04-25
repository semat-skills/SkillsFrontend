import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./FunctionalBody.style";
import { Button } from "../Button/Button";
import { CardComp } from "../Card/Card";
import { State } from "../../reducers/rootReducer";
import { useSelector } from "react-redux";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/hikes/allhikes",
});

export const FunctionalBody: React.FC = () => {
  const navigate = useNavigate();

  const CardsArr = useSelector((state: State) => state.cards);

  const navToNewCard = () => {
    navigate("/newcard");
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const res = await api.get("/");
    const hikes = res.data.hikes;
  };

  return (
    <Container>
      <div className="functional-intro">
        <div className="section-title">Hikes Gallary</div>
        <div className="section-text">
          Hikers is the world’s largest site for hiking and trails
          recommendations. Our mission is to help people find and share trails
          they love. Hikers launched in March 2022.
        </div>
        <Button text="Add New Item" onClick={navToNewCard} />
      </div>

      <div className="cards-results">
        <div className="section-title">All Results</div>
        <h4>Sort By</h4>
        <div className="filters">
          <div className="leftFilters">
            <div className="filter-btn left-btn">Date</div>
            <div className="filter-btn left-btn">Type</div>
            <div className="filter-btn left-btn">Price</div>
          </div>
          <div className="rightFilters">
            <div className="filter-btn push main-btn">
              <div className="active-btn"></div>Filter
            </div>
          </div>
        </div>

        <div className="cards">
          {CardsArr.map((card) => {
            return (
              <CardComp img={card.img} title={card.title} text={card.text} />
            );
          })}
        </div>
      </div>
    </Container>
  );
};
