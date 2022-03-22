import React from 'react'
import { Inspiration } from '../InspirationSection/InspirationSection';
import Intro from '../Intro/Intro';
import { OurFeatures } from '../OurFeatures/OurFeatures';
import * as S from './MainPageStyle'

interface MainPageProps {

}

export const MainPage: React.FC<MainPageProps> = ({}) => {
        return (
          //  <div>
                 <S.MainPageStyle> 
                    
                <Intro></Intro>
                <Inspiration></Inspiration>
                <OurFeatures></OurFeatures>
                    </S.MainPageStyle> 
            //</div>
        );
}

