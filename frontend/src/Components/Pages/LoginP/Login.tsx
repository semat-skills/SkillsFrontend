import React from "react";
import { PhotoD } from "../../Features/PhotoD/PhotoD";
import { Page } from "../../styles/login-signup.style";
import LoginForm from "./LoginForm";

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
  return (
    <Page>
      <div className="ImgFrame">
        <div className="patterns">
          <PhotoD></PhotoD>
          <div className="cir1"></div>
        </div>
      </div>
      <div className="FormPart center">
        <LoginForm></LoginForm>
      </div>
    </Page>
  );
};
