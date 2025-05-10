import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrapper,
  FooterContent,
  FooterColumn,
  FooterTitle,
  FooterText,
  FooterLink,
  SocialIcons,
  SocialIconLink,
  FooterLogo,
  LogoImg,
  CopyrightText
} from './FooterElements';
import footerLogoImage from '../../assets/images/footer-logo.png'; // Or your main logo

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContent>
          <FooterColumn>
            <FooterTitle>Presence. <span className="accent">Not Ads.</span></FooterTitle>
            <FooterTitle><span className="accent">Sell In.</span> Don't Sell Out.</FooterTitle>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Call us</FooterTitle>
            <FooterText>1 300 334 3450</FooterText>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Follow us</FooterTitle>
            <SocialIcons>
              <SocialIconLink href="https://facebook.com" target="_blank" aria-label="Facebook">
                <FaFacebookF />
              </SocialIconLink>
              <SocialIconLink href="https://instagram.com" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <FaLinkedinIn />
              </SocialIconLink>
            </SocialIcons>
          </FooterColumn>

          <FooterColumn className="contact-info">
            <FooterLink href="mailto:contact@powermediapartners.com">contact@powermediapartners.com</FooterLink>
            <FooterLink href="https://twitter.com/@powermediapartners" target="_blank">@powermediapartners</FooterLink> {/* Assuming Twitter or other handle */}
            <FooterText className="locations">Puerto Rico | Texas | LATAM</FooterText>
          </FooterColumn>

          <FooterColumn className="logo-column">
            <FooterLogo to="hero"> {/* Assuming 'hero' is the ID of your top section for scroll */}
              <LogoImg src={footerLogoImage} alt="Power Media Partners" />
            </FooterLogo>
          </FooterColumn>
        </FooterContent>
        <CopyrightText>
          Copyright All rights reserved
        </CopyrightText>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;