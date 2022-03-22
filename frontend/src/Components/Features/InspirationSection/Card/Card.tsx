import React from 'react'
import { CardDiv,CardImg, CardText,CardTitle, CardDescription} from './CardStyle';

interface CardProps {

}

export const Card: React.FC<CardProps> = ({}) => {
        return (
            <CardDiv>
                <CardImg></CardImg>
                <CardDescription>
                <CardTitle>Name</CardTitle>
                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum gravida scelerisque nunc senectus ac.</CardText>
                </CardDescription>
            </CardDiv>
        );
}