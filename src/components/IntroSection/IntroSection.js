// src/components/IntroSection/IntroSection.js
import React from 'react';
import styled from 'styled-components';

// Define styled components here or in IntroSectionElements.js
const SectionWrapper = styled.section`
  padding: 80px 0;
  background-color: ${({ theme }) => theme.colors.primaryLight}; // or other color
  text-align: center; // or left
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
`;

const SubHeading = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const TextBlock = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 1.5rem;
  line-height: 1.8;
`;

const CtaButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accentTeal}; /* Or your CTA color */
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 50px; /* Rounded button */
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentOrange}; /* Darken or change color on hover */
  }
`;


const IntroSection = () => {
  return (
    <SectionWrapper id="intro-section"> {/* ID for potential scroll later */}
      <Container>
        <Heading>We help solar distributors and manufacturers win new markets through field-first content, installer trust, and community-driven storytelling.</Heading>
        <TextBlock>
          We don't just film installs - we build presence that moves product.
        </TextBlock>
        <TextBlock>
          From warehouse floor to rooftop reel, we're the final-mile media team that turns your brand into belief.
        </TextBlock>
        <CtaButton>Start your launch</CtaButton>
      </Container>
    </SectionWrapper>
  );
};

export default IntroSection;