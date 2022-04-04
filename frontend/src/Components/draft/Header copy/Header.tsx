import React, { RefObject, useEffect, useRef, useState } from "react";
import * as S from "./HeaderStyle"; //change it
// import { Menu } from "../";
import { Link } from "react-router-dom";
import { Navbar } from "./NavBar/Navbar";

interface HeaderProps {
  // InsparationRef: RefObject<HTMLDivElement>
}

const Header: React.FC<HeaderProps> = ({}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // const IntroScroll = () => IntroSection.current.scrollIntoView();
  // const InsparationScroll = () =>{
  //   if(InsparationRef && InsparationRef.current)
  //   InsparationRef.current.scrollIntoView();
  // }
  // const FeaturesScroll = () => FeaturesSection.current.scrollIntoView();
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
    <S.HeaderStyle>
      <div className="logo">HIKER</div>
      <Navbar />

      {screenWidth <= 1024 && (
        <div className="menu" onClick={toggleNav}>
          <i className="gg-menu"></i>
        </div>
      )}

      {(toggleMenu || screenWidth > 1024) && (
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
    </S.HeaderStyle>
  );
};

export default Header;
