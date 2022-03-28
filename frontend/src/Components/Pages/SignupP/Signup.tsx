import React from "react";
import { PhotoD } from "../../Features/PhotoD/PhotoD";
import { Page } from "../../styles/login-signup.style";
import SignupForm from "./SignupForm";

interface SignupProps {}

export const Signup: React.FC<SignupProps> = ({}) => {
  return (
    <Page>
      <div className="ImgFrame">
        <div className="patterns">
          <PhotoD></PhotoD>
          <div className="cir1"></div>
        </div>
      </div>
      <div className="FormPart center">
        <SignupForm></SignupForm>
      </div>
    </Page>
  );
};
