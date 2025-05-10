import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinkScroll,
  // NavLogoImg, // If using an image for the logo
} from './NavbarElements';
import { FaBars, FaTimes } from 'react-icons/fa'; // npm install react-icons

// import logoImage from '../../assets/images/logo.png'; // Import your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  const navItems = [
    { to: 'who-we-are', label: 'Who we are' },
    { to: 'the-problem', label: 'The problem' },
    { to: 'final-mile', label: 'The final Mile' },
    { to: 'what-we-do', label: 'What we do' },
    { to: 'where-we-work', label: 'Where we work' },
    { to: 'who-we-work-with', label: 'Who we work with' },
    { to: 'how-it-works', label: 'How it works' },
    { to: 'lms-ecosystem', label: 'LMS Ecosystem' },
  ];

  const scrollProps = {
    spy: true,
    smooth: true,
    offset: -70, // Adjust based on your navbar height
    duration: 500,
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="hero" {...scrollProps}>
          {/* <NavLogoImg src={logoImage} alt="Power Media Partners" /> */}
          Power Media Partners
        </NavLogo>
        <MobileIcon onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu isOpen={isOpen}>
          {navItems.map(item => (
            <NavItem key={item.to}>
              <NavLinkScroll to={item.to} {...scrollProps} onClick={isOpen ? toggle : null}>
                {item.label}
              </NavLinkScroll>
            </NavItem>
          ))}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;