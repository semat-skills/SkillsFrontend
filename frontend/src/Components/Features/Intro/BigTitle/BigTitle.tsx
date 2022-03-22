import React from 'react'
import {BTitleDiv} from './BigTitleStyle'

interface BigTitleProps {
    text: string;
}

export const BigTitle: React.FC<BigTitleProps> = ({text}) => {
        return (
        
          <BTitleDiv>
                {text}
            </BTitleDiv>
            
        );
}

