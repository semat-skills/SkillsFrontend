import React from 'react'
import {TitleDiv} from './CTitleStyle'

interface CTitleProps {
    title:string;
}

export const CTitle: React.FC<CTitleProps> = ({title}) => {
        return (
            <TitleDiv>

            {title}
            </TitleDiv>
        );
}

