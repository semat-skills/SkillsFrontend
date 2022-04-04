import React from "react";
import { CircleImg } from "../../../CircleImg/CircleImg";
import { Container } from "../../../../Consts/styles/login-signup.style";
import SignupForm from "../../../../Pages/SignupPage/SignupForm";

interface SignupProps {}

export const Signup: React.FC<SignupProps> = () => {
  return (
    <Container>
      <div className="ImgFrame">
        <div className="patterns">
          <CircleImg imgUrl="https://images.pexels.com/photos/1687514/pexels-photo-1687514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <div className="cir1"></div>
        </div>
      </div>
      <div className="FormPart center">
        <SignupForm></SignupForm>
      </div>
    </Container>
  );
};
