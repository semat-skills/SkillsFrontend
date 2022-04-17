import React from "react";
import { FirstRow, Container, Input, SecondRow } from "./Footer.style";

export const Footer: React.FC = () => {
  return (
    <Container>
      <div className="f-container">
        <FirstRow>
          <div className="subscribe">
            <div className="subscribeText">Subscribe to our Newsletter</div>
            <Input placeholder="Email Address" />
            <button className="subscribe-btn">&gt;</button>
          </div>
          <div className="pages-links">
            <li>
              <a className="page" href='#'>About</a>
            </li>
            <li>
              <a className="page" href='#'>Trips</a>
            </li>
            <li>
              <a className="page" href='#'>Trails</a>
            </li>
            <li>
              <a className="page" href='#'>Hikers</a>
            </li>
          </div>
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
            <div className="copy">Copyright © 2022 to Hiker</div>
          </div>
          <div className="social">
            <a href="#">
              <i className="fa fa-facebook soc" />
            </a>
            <a href="#">
              <i className="fa fa-twitter soc" />
            </a>
            <a href="#">
              <i className="fa fa-instagram soc" />
            </a>
          </div>
        </SecondRow>
      </div>
    </Container>
  );
};
