import styled from 'styled-components';

export const WhereWeWorkContainer = styled.section`
  background: ${({ theme }) => theme.colors.primaryDark}; // Dark gray
  color: ${({ theme }) => theme.colors.textLight};
  padding: 80px 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 0;
  }
`;

export const WhereWeWorkWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
`;

export const LocationIcon = styled.span`
  font-size: 2rem;
  margin-right: 10px;
  vertical-align: middle;
`;

export const SectionHeading = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const SubHeading = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #ccc;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const LocationCard = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  aspect-ratio: 3 / 4; /* Maintain aspect ratio */

  /* Description below image - not directly part of card for this structure */
`;

export const LocationImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${LocationCard}:hover & {
    transform: scale(1.05);
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Puts flag at top, name at bottom */
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

export const LocationName = styled.h3`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
  margin-top: auto; /* Pushes name to the bottom */
`;

export const LocationFlag = styled.img`
  width: 50px; /* Adjust size */
  height: auto;
  border-radius: 4px;
  border: 1px solid rgba(255,255,255,0.5);
  align-self: flex-end; /* Positions flag to the top-right */
`;

export const BottomText = styled.p`
  margin-top: 50px;
  font-size: 1.3rem;
  line-height: 1.7;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: #e0e0e0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`;