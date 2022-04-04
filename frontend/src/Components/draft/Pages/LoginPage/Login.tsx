import React from "react";
import { CircleImg } from "../../../CircleImg/CircleImg";
import { Container } from "../../../../Assets/styles/login-signup.style";
import LoginForm from "../../../../Pages/LoginPage/LoginForm";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  return (
    <Container>
      <div className="ImgFrame">
        <div className="patterns">
          <CircleImg imgUrl="https://images.pexels.com/photos/1687514/pexels-photo-1687514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <div className="cir1"></div>
        </div>
      </div>
      <div className="FormPart center">
        <LoginForm></LoginForm>
      </div>
    </Container>
  );
};
