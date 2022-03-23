import React from 'react'
// import { CText } from '../CText/CText';
// import { CTitle } from '../CTitle/CTitle';
import {InfoDiv,TitleDiv,TextDiv} from './CInfoStyle'
interface CInfoProps {
    title: string | null ;
    text:string | null;
}

interface CInfoProps {
    // title: string ;
    // text:string ;
}

// export const CInfo: React.FC<CInfoProps> = ({title, text}) => {
//         return (
//            <InfoDiv>
//                <CTitle title=`${title}` />
//                <CText text={text} />

//            </InfoDiv>
//         );
// }

export const CInfo: React.FC<CInfoProps> = ({title,text}) => {
    return (
       <InfoDiv>
           <TitleDiv>Our Features</TitleDiv>
           <TextDiv>SkillsReads is the world’s largest site for readers and book recommendations. Our mission is to help people find and share books they love. Goodreads launched in January 2007.
           </TextDiv>

       </InfoDiv>
    );
}
