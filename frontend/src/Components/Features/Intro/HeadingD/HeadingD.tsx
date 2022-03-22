import React from 'react'
import {IntroHead} from './HeadingStyle'
import {BigTitle} from '../BigTitle/BigTitle'

interface HeadingProps {

}

const HeadingD: React.FC<HeadingProps> = ({}) => {
        return (
                <IntroHead>

                    <BigTitle text='Headline'/>
                    <BigTitle text='Headline 222'/>

                    {/* <BigTitle></BigTitle>
                    <BigTitle></BigTitle> */}

                </IntroHead>


        );
}
export default HeadingD;