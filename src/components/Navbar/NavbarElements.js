import styled from 'styled-components';
import { Link as ScrollLinkBase } from 'react-scroll';

export const Nav = styled.nav`
  background: ${({ scrollNav, theme }) => (scrollNav ? theme.colors.primaryDark : 'transparent')};
  height: 80px;
  margin-top: -80px; /* To compensate for fixed nav pushing content down */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.3s all ease;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    /* background: ${({ theme }) => theme.colors.primaryDark}; */ /* Keep dark on mobile always */
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

export const NavLogo = styled(ScrollLinkBase)`
  color: ${({ theme }) => theme.colors.textLight};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

// export const NavLogoImg = styled.img`
//   height: 50px; // Adjust as needed
// `;

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
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh; /* Or adjust as needed */
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? '80px' : '-100vh')}; /* Slide in/out */
    left: 0;
    opacity: 1;
    transition: all 0.3s ease-in-out;
    background: ${({ theme }) => theme.colors.primaryDark};
    padding-top: 2rem;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 60px;
  }
`;

export const NavLinkScroll = styled(ScrollLinkBase)`
  color: ${({ theme }) => theme.colors.textLight};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 0.9rem;

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.colors.accentOrange};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accentOrange};
    transition: 0.2s ease-in-out;
  }
`;