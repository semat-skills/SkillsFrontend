import React from 'react'
import * as S from './HeaderStyle'
import { Logo } from '../Logo/Logo'
import { Menu } from '../Menu/Menu';


interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({}) => {
        return (
         //   <div className='nav'> 
            <S.HeaderStyle>
                <Logo>
                header
                </Logo>
                <Menu>
                </Menu>
            </S.HeaderStyle>
           // </div>
        );
}

