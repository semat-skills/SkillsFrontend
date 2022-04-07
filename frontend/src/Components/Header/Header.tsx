import React, { useState } from "react";
import { Container, Wrapper } from "./HeaderStyle";
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom";
import { Navbar } from "../draft/NavBar/Navbar";

type HeaderProps ={
  headerOf: string,
}
const Header: React.FC<HeaderProps> = ({headerOf}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [header, setHeader] = useState(headerOf)
  const isDesktop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

 

  return (
    <Wrapper>
      <Container>
        <div className="logo">HIKER</div>
        {/* <Navbar /> */}

        {!isDesktop && (
          <div className="menu" onClick={toggleNav}>
            <i className="gg-menu"></i>
          </div>
        )}

        {(toggleMenu || isDesktop) && (header==='home') && (
          <div className="login-signup-nav">
            <Link to="/login" className="link">
              Login
            </Link>
            <label className="bord">|</label>
            <Link to="/signup" className="link">
              Signup
            </Link>
          </div>
        )}

        {!(header==='home') && isDesktop && (
          <div className="login-signup-nav">
            <Link to="/login" className="link">
              Semat
            </Link>

            <Link to="/signup" className="link">
              <div className="profilePicture"></div>
            </Link>
          </div>
        )}
      </Container>
    </Wrapper>
  );
};

export default Header;
