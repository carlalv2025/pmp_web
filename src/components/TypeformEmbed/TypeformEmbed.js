import React, { useEffect } from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section` // Renamed from TypeformWrapper for clarity
  padding: 80px 20px; // Increased padding
  background-color: ${({ theme }) => theme.colors.primaryLight};
  display: flex;
  flex-direction: column; // Stack heading and form vertically
  justify-content: center;
  align-items: center;
  text-align: center; // Center the heading
`;

const SectionHeading = styled.h2`
  font-size: 2.8rem; // Similar to other section headings
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 40px; // Space between heading and form

  // You can add an accent color span if desired, similar to other headings
  // Example: Get in <span className="accent">touch</span>
  // .accent {
  //   color: ${({ theme }) => theme.colors.accentOrange};
  // }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
`;

const TypeformDivWrapper = styled.div`
  width: 100%;
  max-width: 800px; /* Max width for the form container */
  /* min-height: 500px; Giving the div itself some height can help */

  /* Styles for the div that Typeform populates */
  & > div[data-tf-live] {
    width: 100%;
    height: 500px; /* Default height for the Typeform embed itself */
                   /* Typeform's script might adjust this */
  }

  /* If you need to target the iframe directly (less common for Typeform's new embed) */
  iframe {
    border: none; /* Remove iframe border if any */
  }
`;


const TypeformEmbed = () => {
  useEffect(() => {
    const existingScript = document.getElementById('typeform-embed-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'typeform-embed-script';
      script.src = '//embed.typeform.com/next/embed.js';
      script.async = true;
      document.body.appendChild(script);
      return () => {
        const scriptToRemove = document.getElementById('typeform-embed-script');
        if (scriptToRemove && scriptToRemove.parentNode) { // Check parentNode before removing
          scriptToRemove.parentNode.removeChild(scriptToRemove);
        }
      };
    }
    // If script already exists, do nothing for this component instance's effect
    return () => {}; // Still return a cleanup, even if it does nothing for existing script case
  }, []);

  return (
    <SectionContainer id="contact-form-section">
      <SectionHeading>Get in touch</SectionHeading>
      <TypeformDivWrapper>
        <div data-tf-live="01JV5SNZ8AVPF0K8X52Y3Z3HPS"></div>
      </TypeformDivWrapper>
    </SectionContainer>
  );
};

export default TypeformEmbed;