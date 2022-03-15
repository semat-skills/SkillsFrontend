import React from 'react'
import * as S from '../styles/HeaderStyle'


interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({}) => {
        return (
            <div className='nav'> 
            <S.HeaderStyle>
                header

            </S.HeaderStyle>
            </div>
        );
}