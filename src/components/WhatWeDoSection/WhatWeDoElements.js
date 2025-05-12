import styled from 'styled-components';

export const WhatWeDoContainer = styled.section`
  background: ${({ theme }) => theme.colors.accentOrange};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 80px 0;
  padding-top: 120px;
  margin-top: -70px; // Overlap for curve
  border-top-left-radius: 70px 70px;
  border-top-right-radius: 70px 70px;
  position: relative;
  overflow: hidden; /* Important for positioning items if they go outside bounds */

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 0;
    padding-top: 100px;
    margin-top: -50px;
    border-top-left-radius: 50px 50px;
    border-top-right-radius: 50px 50px;
  }
`;

export const WhatWeDoWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative; /* For absolute positioning of children if needed */
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const StarIcon = styled.span`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textLight};
  display: block;
  margin-bottom: 10px;
`;

export const MainHeading = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

export const SubHeading = styled.p`
  font-size: 1.5rem;
  font-weight: 500;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

export const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
   margin-top: 100px;
  align-items: center;
  position: relative; /* Needed for absolute positioning of service items around main image */

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    /* More complex layout might be needed here to position items around the main image */
    /* This is a simplified stacking approach */
  }
`;

export const MainImageWrapper = styled.div`
  max-width: 350px; /* Adjust as per design */
  margin-bottom: 30px;
  z-index: 1; /* Keep it above the grid if they overlap */
  img {
    border-radius: 50%; /* Circular image */
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    border: 5px solid white;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 400px;
    margin-bottom: 0; /* No margin if side-by-side or grid */
    position: relative; /* Center of the layout */
  }
`;

export const MainImage = styled.img``;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 900px; /* Adjust as needed */
  margin-top: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    /* This is a simplified grid. The design has items positioned *around* the central image.
       That would require absolute positioning or a more complex grid setup.
       For example, you might define a 3x3 grid and place the MainImage in the center
       and the ServiceItems in the surrounding cells.
    */
    grid-template-columns: repeat(3, 1fr); /* Example for a 3-column layout around */
    position: relative; /* If MainImageWrapper is absolute */
    margin-top: -100px; /* Example to overlap with MainImage if it's centered */
  }
  @media screen and (min-width: 1024px) {
     grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); /* Adjust for 5 items if needed */
  }
`;

export const ServiceItem = styled.div`
  text-align: center;
  background: rgba(0,0,0,0.1); // Slight background for cards
  padding: 15px;
  border-radius: 10px;
`;

export const ServiceImage = styled.img`
  width: 100%;
  max-height: 150px; /* Control image height */
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ServiceCaption = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.3;
`;