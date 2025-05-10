import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogoLink,
  NavLogoImg,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinkScroll,
} from './NavbarElements';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoImage from '../../assets/images/logo-pmp.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false); // Function to close menu

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
      // setIsOpen(false); // Optional: close mobile menu when scrolling to top
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  const navItems = [
    // ... (navItems array remains the same)
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
    offset: -80,
    duration: 500,
  };

  return (
    // Pass isOpen to Nav for its own styling based on mobile menu state
    <Nav scrollNav={scrollNav} isOpen={isOpen}>
      <NavbarContainer>
        <NavLogoLink to="hero" {...scrollProps} onClick={closeMenu}> {/* Close menu on logo click */}
          <NavLogoImg src={logoImage} alt="Power Media Partners" />
        </NavLogoLink>
        {/* Pass scrollNav and isOpen to MobileIcon for its conditional color styling */}
        <MobileIcon onClick={toggle} scrollNav={scrollNav} isOpen={isOpen}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu isOpen={isOpen}>
          {navItems.map(item => (
            <NavItem key={item.to}>
              {/* Pass scrollNav to NavLinkScroll for its conditional color styling */}
              <NavLinkScroll
                to={item.to}
                {...scrollProps}
                onClick={closeMenu} // Close menu on link click
                scrollNav={scrollNav}
              >
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