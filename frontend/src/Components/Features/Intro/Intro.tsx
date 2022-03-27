import React from 'react'
import{Button } from '../Button/Button'
import {IntroDiv} from './IntoStyle'
import { PhotoD } from '../PhotoD/PhotoD'
import HeadingD from './HeadingD/HeadingD'
import { useNavigate } from "react-router-dom";

interface IntroProps {

}

const Intro: React.FC<IntroProps> = ({}) => {
  let navigate = useNavigate();
        return (
            <IntroDiv>
                <div>
                <HeadingD></HeadingD>
            
                <Button text='Get Started' onClick={() => {
                  navigate('/login');
                }}></Button>
                </div>
              
              <PhotoD></PhotoD>
           

            </IntroDiv>
        );
}

export default Intro;