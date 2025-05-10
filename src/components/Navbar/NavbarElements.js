import styled from 'styled-components';
import { Link as ScrollLinkBase } from 'react-scroll';

export const Nav = styled.nav`
  background: ${({ scrollNav, theme }) =>
    scrollNav ? theme.colors.primaryDark : theme.colors.primaryLight}; // White when not scrolled, dark when scrolled
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.3s all ease;
  box-shadow: ${({ scrollNav }) => (scrollNav ? '0 2px 10px rgba(0,0,0,0.1)' : 'none')}; // Optional shadow when scrolled

  /* Mobile menu open state - always dark background for the nav bar itself when menu is open */
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background: ${({ isOpen, scrollNav, theme }) =>
      isOpen || scrollNav ? theme.colors.primaryDark : theme.colors.primaryLight};
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogoLink = styled(ScrollLinkBase)`
  /* color: ${({ theme }) => theme.colors.textLight}; // Original color, might need to change */
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 0px;
`;

export const NavLogoImg = styled.img`
  height: 50px;
  width: auto;
  display: block;
  max-width: 100%;
  /* If your logo is dark and the navbar background is white initially,
     you might need a different version of the logo for the light background,
     or ensure your current logo has enough contrast on white.
     The provided logo is dark gray, so it should be fine on white. */
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    /* Change hamburger icon color based on scrollNav and isOpen */
    color: ${({ scrollNav, isOpen, theme }) =>
      scrollNav || isOpen ? theme.colors.textLight : theme.colors.accentOrange}; // Brand color when nav is light, white when nav is dark
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 80px);
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? '80px' : '-100vh')};
    left: 0;
    transition: top 0.4s ease-in-out, opacity 0.4s ease-in-out; // Smoother transition
    background: ${({ theme }) => theme.colors.primaryDark}; // Mobile menu background is always dark
    padding-top: 2rem;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    z-index: 9; // Below navbar but above content
  }
`;

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 60px;
    width: 100%;
    justify-content: center;
  }
`;

export const NavLinkScroll = styled(ScrollLinkBase)`
  /* Text color changes based on scrollNav */
  color: ${({ scrollNav, theme }) => (scrollNav ? theme.colors.textLight : theme.colors.textDark)};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 0.9rem;
  white-space: nowrap;
  transition: color 0.3s ease;


  &.active {
    /* Active link color also needs to adapt */
    color: ${({ theme }) => theme.colors.accentOrange}; // Always orange for active? Or adapt too?
    border-bottom: 3px solid ${({ theme }) => theme.colors.accentOrange};
    /* If border should only show when scrolled or on light bg:
    border-bottom: ${({ scrollNav, theme }) =>
      scrollNav ? `3px solid ${theme.colors.accentOrange}` : `3px solid ${theme.colors.accentOrange}`};
    */
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accentOrange};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem 0;
    font-size: 1.1rem;
    width: 100%;
    justify-content: center;
    /* Mobile menu text color - always use the brand color or light text on dark bg */
    color: ${({ theme }) => theme.colors.accentOrange}; /* Example: Brand color for mobile menu text */
    /* or color: ${({ theme }) => theme.colors.textLight}; */


    &.active {
      border-bottom: none;
      /* color: ${({ theme }) => theme.colors.textLight}; // Ensure active mobile link is clearly visible on dark bg */
      font-weight: bold; // Make active link bold on mobile
    }
     &:hover {
      /* color: ${({ theme }) => theme.colors.textLight}; // Hover on mobile */
      opacity: 0.8;
    }
  }
`;