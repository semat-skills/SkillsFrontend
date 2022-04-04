import React, { useState } from "react";
import { Container } from "./Navbar.style";
import { Link } from "react-scroll";

interface NavbarProps {
  //todo
}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [isInsparation, setInsparation] = useState<boolean>(false);

  const handleisparation = () => {
    setInsparation(true);
  };

  return (
    <Container>
      <div className="nav-bar">
        <div
          className="section-text"
          //   className={className}
          // onClick={IntroScroll}
        >
          <Link
            to="intro"
            // spy={true}
            // smooth={true}
            // duration={500}
            // className='text'
            // activeClass='some-active-class'
          >
            Intro
            {/* <div
            // className={selected ? "headerlink-dot-active" : "headerlink-dot"}
            >
              •
            </div> */}
          </Link>
        </div>
        <div
        // className={selected ? "headerlink-dot-active" : "headerlink-dot"}
        >
          •
        </div>
        <div
        //   className={className}
        // selected={}
        //   onClick={InsparationScroll}
        >
          <Link
            to="insparation"
            // spy={true}
            // smooth={true}
            // duration={500}
            // className='some-class'
            // activeClass='some-active-class'
          >
            Insparation
            {/* <div
              className={
                isInsparation ? "headerlink-dot-active" : "headerlink-dot"
              }
              onClick={handleisparation}
            >
              •
            </div> */}
          </Link>
        </div>
        <div
        // className={selected ? "headerlink-dot-active" : "headerlink-dot"}
        >
          •
        </div>
        <div
        //   className={className}
        // onClick={FeaturesScroll}
        >
          <Link
            to="features"
            // spy={true}
            // smooth={true}
            // duration={500}
            // className='some-class'
            // activeClass='some-active-class'
          >
            Features
            {/* <div
            // className={selected ? "headerlink-dot-active" : "headerlink-dot"}
            >
              •
            </div> */}
          </Link>
        </div>
      </div>

      {/* <div className='header'>
      <HeaderLink page='home' selected={page === 'home'} />
      <HeaderLink page='login' selected={page === 'login'} />
      <HeaderLink page='signup' selected={page === 'signup'} />
    </div> */}
    </Container>
  );
};

///////////////
// interface HeaderProps {
//     page:string,
//     selected:boolean
// }

// const HeaderLink: React.FC<HeaderProps> =({ page, selected }) => {
//     const title = page.charAt(0).toUpperCase() + page.slice(1);
//     let className = selected ? 'headerlink-no-link ' : '';
//     className += 'headerlink-title';

//     return (
//       <Link to={`/${page}`} className={className}>
//         {title}
//         <div className={selected ? 'headerlink-dot-active' : 'headerlink-dot'}>
//           •
//         </div>
//       </Link>
//     );
//   };
