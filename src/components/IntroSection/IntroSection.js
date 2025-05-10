import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components'; // Import css helper

// Define styled components here or in IntroSectionElements.js
const SectionWrapper = styled.section`
  padding: 80px 0;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  text-align: center;
  position: relative; /* Needed for original button positioning context */
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
  max-width: 700px; /* Constrain text width */
  margin-left: auto;
  margin-right: auto;
`;

// Original Button (will be hidden when sticky button is active)
const OriginalCtaButton = styled.button`
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentOrange};
  }
`;

// Sticky Button (fixed position)
const StickyCtaButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accentTeal};
  color: white;
  padding: 12px 28px; /* Slightly smaller */
  border: none;
  border-radius: 50px;
  font-size: 1rem; /* Slightly smaller text */
  font-weight: bold;
  cursor: pointer;
  position: fixed;
  bottom: 30px;
  right: -200px; /* Start off-screen to the right */
  z-index: 1000; /* Ensure it's on top */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: right 0.5s ease-in-out, background-color 0.3s ease; /* Animate 'right' property */

  ${({ isVisible }) =>
    isVisible &&
    css`
      right: 30px; /* Slide in */
    `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentOrange};
  }

   @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px 20px;
    font-size: 0.9rem;
    bottom: 20px;
    right: -200px; /* Start off-screen */
    ${({ isVisible }) =>
      isVisible &&
      css`
        right: 20px; /* Slide in for mobile */
      `}
  }
`;


const IntroSection = () => {
  const [isStickyButtonVisible, setIsStickyButtonVisible] = useState(false);
  const introSectionRef = useRef(null); // Ref to get the section's position

  useEffect(() => {
    const handleScroll = () => {
      if (introSectionRef.current) {
        // Calculate when to show the sticky button
        // e.g., when the bottom of the intro section is about to scroll out of view
        // or simply after scrolling a certain amount like 300px
        const introSectionBottom = introSectionRef.current.getBoundingClientRect().bottom;
        const scrollThreshold = window.innerHeight * 0.5; // Show when 50% of intro is scrolled past top of viewport
                                                          // OR a fixed pixel value from top window.scrollY > 300

        if (window.scrollY > 300) { // Simpler threshold: after scrolling 300px
        // if (introSectionBottom < scrollThreshold) { // More complex: related to section visibility
          setIsStickyButtonVisible(true);
        } else {
          setIsStickyButtonVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call it once to set initial state if page loads scrolled
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  const handleButtonClick = () => {
    // Add action for the button click, e.g., scroll to contact form or open a modal
    console.log('Start Your Launch Clicked!');
    // Example: Scroll to an element with ID 'contact-section'
    const contactSection = document.getElementById('contact-section'); // Make sure you have this ID on your contact section
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


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
        {/* Original button, hidden when sticky is active */}
        <OriginalCtaButton onClick={handleButtonClick} isSticky={isStickyButtonVisible}>
          Start your launch
        </OriginalCtaButton>
      </Container>

      {/* Sticky button, only visible and animated when conditions are met */}
      <StickyCtaButton onClick={handleButtonClick} isVisible={isStickyButtonVisible}>
        Start your launch
      </StickyCtaButton>
    </SectionWrapper>
  );
};

export default IntroSection;