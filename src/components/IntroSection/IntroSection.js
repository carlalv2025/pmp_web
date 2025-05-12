import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

// Define styled components here or in IntroSectionElements.js
const SectionWrapper = styled.section`
  padding: 80px 0;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  text-align: center;
  position: relative;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 1rem;
  line-height: 1.3;
   @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

const TextBlock = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 1.5rem;
  line-height: 1.8;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

// --- Change button to a ---
const OriginalCtaLink = styled.a`
  display: inline-block; // Needed for anchor tags to respect margin/padding properly
  background-color: ${({ theme }) => theme.colors.accentTeal};
  color: white;
  padding: 15px 35px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
  margin-top: 20px;
  opacity: ${({ isSticky }) => (isSticky ? 0 : 1)};
  visibility: ${({ isSticky }) => (isSticky ? 'hidden' : 'visible')};
  text-decoration: none; // Remove default anchor underline

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentOrange};
    color: white; // Ensure text color remains white on hover
  }
`;

// --- Change button to a ---
const StickyCtaLink = styled.a`
  display: inline-block; // Needed for anchor tags
  background-color: ${({ theme }) => theme.colors.accentTeal};
  color: white;
  padding: 12px 28px;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  position: fixed;
  bottom: 30px;
  right: -200px;
  z-index: 1000;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: right 0.5s ease-in-out, background-color 0.3s ease;
  text-decoration: none; // Remove default anchor underline

  ${({ isVisible }) =>
    isVisible &&
    css`
      right: 30px;
    `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentOrange};
     color: white; // Ensure text color remains white on hover
  }

   @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px 20px;
    font-size: 0.9rem;
    bottom: 20px;
    right: -200px;
    ${({ isVisible }) =>
      isVisible &&
      css`
        right: 20px;
      `}
  }
`;


const IntroSection = () => {
  const [isStickyButtonVisible, setIsStickyButtonVisible] = useState(false);
  const introSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (introSectionRef.current) {
        const scrollThreshold = 300; // Or your preferred calculation
        if (window.scrollY > scrollThreshold) {
          setIsStickyButtonVisible(true);
        } else {
          setIsStickyButtonVisible(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsAppLink = "https://wa.link/odjldi"; // Define the link URL

  return (
    <SectionWrapper id="intro-section" ref={introSectionRef}>
      <Container>
        <Heading>We help solar distributors and manufacturers win new markets through field-first content, installer trust, and community-driven storytelling.</Heading>
        <TextBlock>
          We don't just film installs - we build presence that moves product.
        </TextBlock>
        <TextBlock>
          From warehouse floor to rooftop reel, we're the final-mile media team that turns your brand into belief.
        </TextBlock>

        {/* Use the anchor tag styled component */}
        <OriginalCtaLink
          href={whatsAppLink}
          target="_blank" // Open in new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
          isSticky={isStickyButtonVisible}
        >
          Start your launch
        </OriginalCtaLink>
      </Container>

      {/* Use the anchor tag styled component */}
      <StickyCtaLink
        href={whatsAppLink}
        target="_blank" // Open in new tab
        rel="noopener noreferrer" // Security best practice
        isVisible={isStickyButtonVisible}
      >
        Start your launch
      </StickyCtaLink>
    </SectionWrapper>
  );
};

export default IntroSection;