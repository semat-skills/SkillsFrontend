import React from 'react'
import {ButtonS} from './ButtonStyle'

interface ButtonProps {
    type?: string;
    text?: string;
    // disabled?: (() => void) | undefined| boolean;
}

export const Button: React.FC<ButtonProps> = ({text}) => {
        return (
            <ButtonS>
               {text}
           </ButtonS>
        );
}

//edit - general : Done!