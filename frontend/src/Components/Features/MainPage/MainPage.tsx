import React from 'react'
import { Intro} from '../Intro/Intro';
import * as S from './MainPageStyle'

interface MainPageProps {

}

export const MainPage: React.FC<MainPageProps> = ({}) => {
        return (
          //  <div>
                 <S.MainPageStyle> 
                    
                <Intro></Intro>
                    </S.MainPageStyle> 
            //</div>
        );
}