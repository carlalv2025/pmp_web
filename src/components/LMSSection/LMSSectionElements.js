import styled from 'styled-components';

export const LMSContainer = styled.section`
  background: ${({ theme }) => theme.colors.secondaryBg}; /* Light beige */
  padding: 80px 0;
  /* This section has a curved top where the previous dark section ends.
     This implies the dark section above it (HowItWorksSection or PricingSection)
     should have a border-bottom-left-radius and border-bottom-right-radius
     or this LMSContainer needs a negative margin-top and a ::before pseudo-element
     to create the curve. For simplicity here, we'll assume the previous section handles its bottom curve.
  */
  position: relative; /* For the curve from the top if implemented with pseudo-elements */
  padding-top: 120px; // More padding if there's a curve overlap
  margin-top: -70px; // To pull up for curve from dark section above. Adjust as needed.
  border-top-left-radius: 70px 70px; // Matches the design's curve from a dark section
  border-top-right-radius: 70px 70px; // Matches the design's curve from a dark section

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 80px;
    margin-top: -50px;
    border-top-left-radius: 50px 50px;
    border-top-right-radius: 50px 50px;
  }
`;

export const LMSWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const LMSRow = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr; // Text column slightly wider
  gap: 50px;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const Column1 = styled.div`
  /* order: 2;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 1;
  } */
`;

export const Column2 = styled.div`
  /* order: 1;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 2;
  } */
  display: flex;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  color: ${({ theme }) => theme.colors.textDark};
`;

export const TopLineIcon = styled.span`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.accentOrange};
  margin-right: 10px;
  vertical-align: middle;
`;

export const TopLineText = styled.h2`
  display: inline-block;
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 20px;
  vertical-align: middle;

  .accent {
    color: ${({ theme }) => theme.colors.accentOrange};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`;

export const Heading = styled.p`
  font-size: 1.8rem;
  line-height: 1.4;
  margin-bottom: 25px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDark};


  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
  line-height: 1.6;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 15px;
  color: #444;
  font-weight: 500;
`;

export const FeatureIcon = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.accentOrange};
  margin-right: 15px;
  flex-shrink: 0; /* Prevent shrinking */
`;

export const ImgWrap = styled.div`
  max-width: 500px;
  width: 100%;
  height: auto;
  img {
    width: 100%;

    object-fit: cover;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        clip-path: ellipse(50% 40% at 50% 50%); // Adjust for better look on mobile
    }
  }
`;

export const Img = styled.img``;

export const Slogan = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
  color: ${({ theme }) => theme.colors.textDark};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
    margin-top: 30px;
  }
`;