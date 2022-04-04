import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Container } from "./IntoStyle";
import { CircleImg } from "../CircleImg/CircleImg";

const Intro: React.FC = ({}) => {
  let navigate = useNavigate();
  return (
    <Container>
      <div>
        <div className="intro-main-title">
          <div className="bigTitle">Hiker</div>
          <div className="bigTitle">Start Your Trail</div>
        </div>
        {/* <HeadingD/> */}
        <Button
          text="Get Started"
          onClick={() => {
            navigate("/login");
          }}
        ></Button>
      </div>
      <div className="photoDiv">
        <CircleImg imgUrl='https://images.pexels.com/photos/1687514/pexels-photo-1687514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
      </div>
    </Container>
  );
};

export default Intro;
