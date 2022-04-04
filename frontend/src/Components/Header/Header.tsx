import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "./HeaderStyle";
import { Link } from "react-router-dom";
import { Navbar } from "../draft/NavBar/Navbar";

const Header: React.FC = ({}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);

  return (
    <Wrapper>
      <Container>
        <div className="logo">HIKER</div>
        {/* <Navbar /> */}

        {screenWidth <= 1024 && (
          <div className="menu" onClick={toggleNav}>
            <i className="gg-menu"></i>
          </div>
        )}

        {(toggleMenu || screenWidth > 1024) && !loggedIn && (
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

        {loggedIn && screenWidth > 1024 && (
          <div className="login-signup-nav">
            <Link to="/login" className="link">
              Noam
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
