import React from 'react'
import { FlexBox } from '../../styles/FlexBox';
import { Header } from '../../Features/Header/Header';
import { MainPage } from '../../Features/MainPage/MainPage';
import { Footer} from '../../Features/Footer/Footer';
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


