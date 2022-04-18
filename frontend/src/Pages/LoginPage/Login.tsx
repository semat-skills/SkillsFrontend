import React from "react";
import { CircleImg } from "../../Components/CircleImg/CircleImg";
import { Container } from "../../Assets/styles/login-signup.style";
import { FormikLogin } from "../../Components/Form/FormikLogin";

export const Login: React.FC = () => {
  return (
    <Container>
      <div className="ImgFrame">
        <div className="patterns" data-testid="patterns">
          <CircleImg imgUrl="https://images.pexels.com/photos/1687514/pexels-photo-1687514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <div className="cir1"></div>
        </div>
      </div>
      <div className="FormPart center" data-testid="loginForm">
        <FormikLogin />
      </div>
    </Container>
  );
};
