import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll'; // If logo links to top

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footerBg}; /* Dark gray from theme */
  color: #a0a0a0; /* Light gray for text */
  padding: 60px 0 30px;
`;

export const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  align-items: flex-start; /* Align columns to the top */
  margin-bottom: 40px; /* Space before copyright */

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr); /* Two columns on tablet */
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr; /* Single column on mobile */
    text-align: center;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;

  &.contact-info {
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      align-items: center;
    }
  }
  &.logo-column {
    align-items: flex-end; /* Default */
    @media screen and (max-width: 1024px) { /* Adjust breakpoint if logo wraps early */
        align-items: flex-start; /* When it might wrap to a new line */
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      align-items: center; /* Center logo on mobile */
      margin-top: 20px;
    }
  }
`;

export const FooterTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textLight}; /* White or very light gray */
  margin-bottom: 15px;

  .accent {
    color: ${({ theme }) => theme.colors.accentOrange};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 8px;
  line-height: 1.6;

  &.locations {
    margin-top: 5px;
  }
`;

export const FooterLink = styled.a`
  font-size: 0.9rem;
  margin-bottom: 8px;
  color: #a0a0a0;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accentOrange};
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

export const SocialIconLink = styled.a`
  color: #a0a0a0;
  font-size: 1.5rem;
  margin-right: 15px;
  transition: color 0.3s ease;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accentOrange};
  }
`;

export const FooterLogo = styled(ScrollLink)`
  cursor: pointer;
  display: inline-block; /* Allows for alignment */
`;

export const LogoImg = styled.img`
  width: 120px; /* Adjust as needed */
  height: auto;
`;

export const CopyrightText = styled.p`
  text-align: center;
  font-size: 0.8rem;
  color: #777;
  border-top: 1px solid #444; /* Separator line */
  padding-top: 20px;
  margin-top: 20px;
`;