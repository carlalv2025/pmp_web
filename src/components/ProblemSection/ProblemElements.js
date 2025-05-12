import styled from 'styled-components';

export const ProblemContainer = styled.section`
  background: ${({ theme }) => theme.colors.secondaryBg}; // Light beige
  padding: 80px 0;
  padding-top: 120px; // To account for curve
  margin-top: -70px; // To pull up and create overlap for curve
  border-top-left-radius: 70px 70px; // Simplified curve
  border-top-right-radius: 70px 70px; // Simplified curve
  position: relative;
  z-index: 0; // Behind navbar if navbar is sticky and has higher z-index

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 80px;
    margin-top: -50px;
    border-top-left-radius: 50px 50px;
    border-top-right-radius: 50px 50px;
  }
`;
export const StarIcon =  styled.img`
  width: 3%;
  height: 3%;
  margin-right: 10px;
  object-fit: cover;
  transition: transform 0.3s ease;


`;

export const TheProblemIcon =  styled.img`
  width: 5%;
  height: 5%;
  margin-right: 10px;
  object-fit: cover;
  transition: transform 0.3s ease;


`;
export const ProblemWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ProblemRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: flex-start; // Align items to the top
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-areas: 'col1' 'col2';
     align-items: center;
  }
`;

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px; /* Space on mobile */
`;

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
`;

export const ImgWrap = styled.div`
  max-width: 450px;
  height: auto;
  img {
  

  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`;

export const PmpLogo = styled.div`
  display: flex;
  justify-content: flex-end; /* Align to the right */
  margin-bottom: 20px;
`;

export const PmpLogoImg = styled.img`
  width: 80px; /* Adjust size */
  height: auto;
`;

export const TopLine = styled.h2`
  color: ${({ theme }) => theme.colors.accentOrange};
  font-size: 2.5rem; /* Large 'The problem' */
  font-weight: 700;
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  img {
    width: 24px; /* Ajusta según necesidad */
    height: auto;
    margin-right: 10px;
  }
`;

export const Heading = styled.p`
  margin-bottom: 24px;
  font-size: 1.3rem;
  line-height: 1.4;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textDark};
`;

export const Paragraph = styled.p`
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
`;

export const ProblemList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 30px;
`;

export const CheckIcon = styled.span`
  color: ${({ theme }) => theme.colors.accentOrange};
  font-weight: bold;
  margin-right: 10px;
  font-size: 1.2rem;
`;

export const ProblemListItem = styled.li`
  margin-bottom: 15px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: 500;
 display: flex;
  justify-content: space-between;
  align-items: flex-start;
  span {
    display: block;
    font-size: 0.9rem;
    color: #777;
    margin-top: 4px;
    padding-left: 28px; /* Align with text after icon */
  }
`;