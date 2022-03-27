import React from 'react'
import { ButtonD } from './Button.style';


interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined
    text?: string;
    disabled?:  (boolean & (boolean | (() => void))) | undefined;
    className?: string;
    onClick?:( ()=> void ) | ((e:React.MouseEvent<HTMLButtonElement>) => void);
    
}

export const Button: React.FC<ButtonProps> = ({className,text,type,disabled,onClick}) => {
        return (
            <ButtonD className={className} type={type} disabled={disabled} onClick={onClick}>
               {text}
           </ButtonD>
        );
}