import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Layout/css/header.css';


const menuHamburgerBtn = (setNavDisplay, navDisplay, setNavStyle, transitionMenuHambuger, setTransitionMenuHambuger) => {
  return (
    <button
      className="menu-hamburger-btn"
      onClick={() => {
        if (!navDisplay) {
          setTransitionMenuHambuger({
            lineOne: 'translate(0px, 10px) rotate(45deg)',
            lineTwo: '0',
            lineThree: 'translate(0px, -10px) rotate(-45deg)'
          });
          setNavStyle({ animationName: 'displayNav', left: '-100%' });
          setNavDisplay(!navDisplay);
        } else {
          setTransitionMenuHambuger({
            lineOne: 'translate(0px, 0px) rotate(0deg)',
            lineTwo: '1',
            lineThree: 'translate(0px, 0px) rotate(0deg)'
          });
          setNavStyle({ animationName: 'coverNav', left: '0%' });
          setTimeout(() => {
            setNavDisplay(!navDisplay);
          }, 400);
        }
      }}
    >
      <div
        className="menu-line-1"
        style={{ transform: transitionMenuHambuger.lineOne }}
      ></div>
      <div
        className="menu-line-2"
        style={{ opacity: transitionMenuHambuger.lineTwo }}
      ></div>
      <div
        className="menu-line-3"
        style={{ transform: transitionMenuHambuger.lineThree }}
      ></div>
    </button>
  );
}

const NavBar = (navStyle) => {
  return (
    <nav
      className="nav-bar"
      style={navStyle}
    >
      <ul className="nav-bar-list-container">
        <li className="nav-bar-list-container-item1"><Link to='/'>HEALTHY RECIPES</Link></li>
        <li className="nav-bar-list-container-item2"><Link to='/'>BLOG</Link></li>
        <li className="nav-bar-list-container-item3"><Link to='/'>JOIN</Link></li>
        <li className="nav-bar-list-container-item4"><Link to='/register'>REGISTER</Link></li>
      </ul>
    </nav>
  )
}

const Header = () => {
  const [navDisplay, setNavDisplay] = useState(true);
  const [navStyle, setNavStyle] = useState({});
  const [transitionMenuHambuger, setTransitionMenuHambuger] = useState({});

  useEffect(() => {
    if (window.innerWidth < 1201) {
      setNavDisplay(false)
    }
  }, []);

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1201) {
      setNavDisplay(true)
    } else {
      setNavDisplay(false)
    }
  });
  return (
    <header>
      <div className="header-container">
        {menuHamburgerBtn(setNavDisplay, navDisplay, setNavStyle, transitionMenuHambuger, setTransitionMenuHambuger)}
        <Link to="/" className="brand-title">Healthy Food</Link>
        {navDisplay && NavBar(navStyle, navDisplay)}
      </div>
    </header>
  );
}

export default Header;
