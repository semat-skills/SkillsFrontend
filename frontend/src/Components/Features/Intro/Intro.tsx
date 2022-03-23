import React from 'react'
import{Button } from '../Button/Button'
import {IntroDiv} from './IntoStyle'
import { Photo } from '../Photo/Photo'
import HeadingD from './HeadingD/HeadingD'


interface IntroProps {

}

const Intro: React.FC<IntroProps> = ({}) => {
        return (
            <IntroDiv>
                <div>
                <HeadingD></HeadingD>
            
                <Button text='Get Started'></Button>
                </div>
              
              <Photo></Photo>
           

            </IntroDiv>
        );
}

export default Intro;