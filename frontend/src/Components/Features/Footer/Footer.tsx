import React from 'react'
import * as FStyle from './Footer.style';

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = () => {
        return (
            <div>
                <FStyle.FooterStyle>
                    <FStyle.FirstRow>
                        <FStyle.Subscribe>
                        Subscribe to our newsletter
                        <br />
                        <FStyle.Input placeholder="Email Address"></FStyle.Input>
                        <FStyle.SubscribeButton>&gt;</FStyle.SubscribeButton>
                        </FStyle.Subscribe>
                      <FStyle.Pages>
                        <li>
                            <FStyle.Page href="">Page 1</FStyle.Page>
                        </li>
                        <li>
                            <FStyle.Page href="">Page 2</FStyle.Page>
                        </li>
                        <li>
                            <FStyle.Page href="">Page 3</FStyle.Page>
                        </li>
                        <li>
                            <FStyle.Page href="">Page 4</FStyle.Page>
                        </li>
                      </FStyle.Pages>
                    </FStyle.FirstRow>
                </FStyle.FooterStyle>
            </div>
        );
}

