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
        <FirstRow>
          <Subscribe>
            Subscribe to our Newsletter
            <br />
            <Input placeholder="Email Address"></Input>
            <SubscribeButton>&gt;</SubscribeButton>
          </Subscribe>
          <Pages>
            <li>
              <Page href="">Page 1</Page>
            </li>
            <li>
              <Page href="">Page 2</Page>
            </li>
            <li>
              <Page href="">Page 3</Page>
            </li>
            <li>
              <Page href="">Page 4</Page>
            </li>
          </Pages>
        </FirstRow>

        <SecondRow></SecondRow>
      </FooterStyle>
    </>
  );
};
