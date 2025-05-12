import styled from 'styled-components';

export const WhoWeAreContainer = styled.div`
  background: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 100px 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 0;
  }
`;

export const WhoWeAreWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const WhoWeAreRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2'; // Default desktop

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-areas: 'col1' 'col2'; // Stack on tablet and mobile
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const StarIcon =  styled.img`
  width: 10%;
  height: 10%;
  margin-right: 10px;
  object-fit: cover;
  transition: transform 0.3s ease;


`;


export const TopLine = styled.p`
  color: ${({ theme }) => theme.colors.accentOrange};
  font-size: 2rem; /* Made "Who we are" larger */
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 1.8rem; /* Adjust as needed */
  line-height: 1.3;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textLight};

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1rem;
  line-height: 1.8;
  color: #ccc; // Slightly lighter than pure white for subtitle
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 10px; // Slight rounding
`;