import React from 'react';
import styled from 'styled-components';

const CTAContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.accentOrange}; /* Orange background */
  color: ${({ theme }) => theme.colors.textDark}; /* Dark text for contrast */
  padding: 60px 20px;
  text-align: center;
`;

const CTAText = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.5;
  max-width: 800px;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`;

const CallToActionSection = () => {
  return (
    <CTAContainer id="cta-final"> {/* Add an ID if you want to link to it */}
      <CTAText>
        Your brand doesn’t live in a Dropbox folder. <br />
        It lives in the field — on a rooftop, in a reel, <br />
        and in your installer’s hands
      </CTAText>
    </CTAContainer>
  );
};

export default CallToActionSection;