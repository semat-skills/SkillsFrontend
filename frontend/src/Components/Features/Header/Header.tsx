import React from "react";
import * as S from "./HeaderStyle"; //change it
import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <S.HeaderStyle>
      <Logo />
      {/* <Menu /> */}

      <div className="login-signup-nav">
          <Link to='/login' className="link">Login</Link>
          <label className="bord">|</label>
          <Link to='/signup' className="link">Signup</Link>
          </div>
    </S.HeaderStyle>
  );
};

export default Header;
