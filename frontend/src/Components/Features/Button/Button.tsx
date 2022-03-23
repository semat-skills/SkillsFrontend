import React from 'react'


interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined
    text?: string;
    disabled?:  (boolean & (boolean | (() => void))) | undefined;
    className?: string;
    
}

export const Button: React.FC<ButtonProps> = ({text,type,disabled}) => {
        return (
            <Button type={type} disabled={disabled}>
               {text}
           </Button>
        );
}

//edit - general : Done!