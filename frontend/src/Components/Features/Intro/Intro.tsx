import React from 'react'
import{Button } from './Button/Button'
import {IntroDiv} from './IntoStyle'
import { IntroPhoto } from './IntroPhoto/IntroPhoto'
import HeadingD from './HeadingD/HeadingD'


interface IntroProps {

}

const Intro: React.FC<IntroProps> = ({}) => {
        return (
            <IntroDiv>
                <div>
                <HeadingD></HeadingD>
            
                <Button></Button>
                </div>
              
              <IntroPhoto></IntroPhoto>
           

            </IntroDiv>
        );
}

export default Intro;