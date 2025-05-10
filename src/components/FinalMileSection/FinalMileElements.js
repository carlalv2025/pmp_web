import styled from 'styled-components';

export const FinalMileContainer = styled.section`
  background: #004D40; /* Dark Teal - adjust from theme if needed */
  color: ${({ theme }) => theme.colors.textLight};
  padding: 80px 0;
  position: relative; // For the bottom text

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 0;
  }
`;

export const FinalMileWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const FinalMileRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-areas: 'col1' 'col2';
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
  display: flex;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`;

export const StarIcon = styled.span`
  color: #FFD700; /* Yellowish/Gold color for star */
  font-size: 2.5rem;
  margin-right: 10px;
  vertical-align: middle;
`;

export const Heading = styled.h2`
  color: #FFD700; /* Yellowish/Gold for heading */
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 24px;
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 20px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #E0E0E0; // Light gray for text

  strong {
    font-weight: 700;
  }
`;

export const ImgWrap = styled.div`
  max-width: 480px;
  height: auto;
  img {
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const ActivationText = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: 50px;
  padding: 20px;
  font-weight: 500;

  strong {
    color: #FFD700; /* Highlight color */
    font-weight: 700;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
    margin-top: 30px;
  }
`;