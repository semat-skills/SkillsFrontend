import React from "react";
import {
  FirstRow,
  FooterStyle,
  Input,
  Page,
  Pages,
  SecondRow,
  Subscribe,
  SubscribeButton,
} from "./Footer.style";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <FooterStyle>
        <div className="f-container">
        <FirstRow>
          <Subscribe>
            Subscribe to our Newsletter
            <br />
            <Input placeholder="Email Address"></Input>
            <SubscribeButton>&gt;</SubscribeButton>
          </Subscribe>
          <Pages>
            <li>
              <Page href="">About</Page>
            </li>
            <li>
              <Page href="">Trips</Page>
            </li>
            <li>
              <Page href="">Trails</Page>
            </li>
            <li>
              <Page href="">Hickers</Page>
            </li>
          </Pages>
        </FirstRow>

        <SecondRow>
          <div className="law">
            <div className="terms">
              <div>
                <a className="term" href="#">
                  Terms &#38; Conditions
                </a>
              </div>
              <div>
                <a className="privacy" href="#">
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="copy">Copyright © 2022 to Hicker</div>
          </div>
          <div className="social">
            <a href="#">
              <i className="fa fa-facebook soc"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter soc"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram soc"></i>
            </a>
          </div>
        </SecondRow>
        </div>
      </FooterStyle>
    </>
  );
};
