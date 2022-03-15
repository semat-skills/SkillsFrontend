import React from 'react'
import { FlexBox } from '../styles/FlexBox';
import { Header } from './Header';
import { MainPage } from './MainPage';
import { Footer} from './Footer';
interface MainContainerProps {

}

export const MainContainer: React.FC<MainContainerProps> = ({}) => {
        return (

            <FlexBox>
                 <Header/>
              <MainPage/>
              <Footer/>

           </FlexBox>
        );
}


