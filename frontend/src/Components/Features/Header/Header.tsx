import React from 'react'
import * as S from './HeaderStyle' //change it
import { Logo } from '../Logo/Logo'
import { Menu } from '../Menu/Menu';


interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({}) => {
        return (
        
            <S.HeaderStyle>
                <Logo>
                header
                </Logo>
                <Menu>
                </Menu>
            </S.HeaderStyle>
   
        );
}

export default Header;