import React from 'react'
import {BigTitle} from './BigTitle/BigTitle'
import{IntroButton } from './IntroButton/IntroButton'
import {IntroDiv} from './IntoStyle'

interface IntroProps {

}

export const Intro: React.FC<IntroProps> = ({}) => {
        return (
            <IntroDiv>
                <BigTitle></BigTitle>
            
                <IntroButton></IntroButton>

            </IntroDiv>
        );
}

