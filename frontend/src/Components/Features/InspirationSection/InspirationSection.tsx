import React, { useState } from 'react'
import { Card } from './Card/Card';
import { InsptDiv, TitleDiv } from './InspirationSectionStyle';
// import Carousel from "react-simply-carousel";


interface InspirationSectionProps {

}

export const Inspiration
: React.FC<InspirationSectionProps> = ({}) => {
        
    // const [activeSlide, setActiveSlide] = useState(0);
    return (
           <InsptDiv>
               <TitleDiv>Hicking of The Week</TitleDiv>
              {/* <Carousel> */}
              <div className='cards'>
               <Card></Card>
               <Card></Card>
               <Card></Card>
               </div>
               {/* <Card></Card> */}
               
{/* 

               </Carousel> */}
           </InsptDiv>
        );
}


