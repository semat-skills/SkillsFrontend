import React from 'react'
import {InfoDiv,TitleDiv,TextDiv} from './CInfoStyle'
interface CInfoProps {
    title: string | null ;
    text:string | null;
}

interface CInfoProps {

}



export const CInfo: React.FC<CInfoProps> = ({title,text}) => {
    return (
       <InfoDiv>
           <TitleDiv>Our Features</TitleDiv>
           <TextDiv>SkillsReads is the world’s largest site for readers and book recommendations. Our mission is to help people find and share books they love. Goodreads launched in January 2007.
           </TextDiv>

       </InfoDiv>
    );
}
