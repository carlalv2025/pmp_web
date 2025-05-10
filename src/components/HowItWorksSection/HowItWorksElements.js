import styled from 'styled-components';

export const HowItWorksContainer = styled.section`
  background: ${({ theme }) => theme.colors.primaryDark}; // Dark background
  color: ${({ theme }) => theme.colors.textLight};
  padding: 80px 0;

  /* The design shows a subtle curve from the previous beige section.
     This would typically be handled by the beige section having a curved bottom
     or this section having a curved top that matches the beige.
     For simplicity, this example assumes straight edges between these two.
     If the beige section above this has a curved bottom (e.g. border-bottom-left-radius),
     this section might need a negative margin-top to sit correctly.
  */

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 0;
  }
`;

export const HowItWorksWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const HowItWorksRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-areas: 'col2' 'col1'; /* Text first on mobile, then image */
  }
`;

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px; /* Space for mobile when stacked */
`;

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
`;

export const ImgWrap = styled.div`
  max-width: 500px;
  height: auto;
  img {
    border-radius: 10px;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 30px; /* Add some padding at the bottom */
`;

export const SunIcon = styled.span`
  font-size: 2.2rem; /* Adjust */
  color: ${({ theme }) => theme.colors.accentOrange}; /* Or a yellow color */
  margin-left: 10px;
  vertical-align: middle;
`;

export const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const ModelTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: #e0e0e0; // Slightly lighter than main text

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

export const StepsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StepItem = styled.li`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 15px;
  color: #ccc; // Light gray for steps

  span { /* Number styling */
    font-weight: bold;
    color: ${({ theme }) => theme.colors.accentOrange};
    margin-right: 8px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;