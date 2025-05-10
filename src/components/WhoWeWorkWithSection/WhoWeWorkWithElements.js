import styled from 'styled-components';

export const WhoWorkWithContainer = styled.section`
  background: ${({ theme }) => theme.colors.primaryDark}; /* Dark background */
  padding: 80px 0;
  position: relative; // For pseudo-elements if needed for complex curves

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 0;
  }
`;

export const WhoWorkWithWrapper = styled.div`
  max-width: 900px; /* Content is narrower */
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the title and box */
`;

export const PeopleIcon = styled.span`
  font-size: 2.5rem; /* Adjust */
  margin-right: 15px;
  color: ${({ theme }) => theme.colors.accentOrange}; /* Or use people icon color from design */
  vertical-align: middle;
`;

export const SectionTitle = styled.h2`
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colors.textLight}; /* White title */
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center; /* Center icon and text */

  /* Simulate the people icon group with text for now */
  &::before {
    content: '👥'; /* Replace with actual SVG or multiple icons if needed */
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.accentOrange};
    margin-right: 15px;
    opacity: 0.7; /* Design shows them as outlines */
  }


  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
    &::before { font-size: 2.5rem; }
  }
`;

export const ContentBox = styled.div`
  background: ${({ theme }) => theme.colors.secondaryBg}; /* Light beige box */
  padding: 40px;
  border-radius: 20px; /* Rounded corners */
  /* The design has specific corner radiuses, more complex with clip-path or multiple border-radius */
  border-top-left-radius: 60px 60px; /* More pronounced curve on top-left */
  border-bottom-right-radius: 60px 60px; /* More pronounced curve on bottom-right */
  width: 100%;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 30px 20px;
    border-top-left-radius: 40px 40px;
    border-bottom-right-radius: 40px 40px;
  }
`;

export const WorkItemList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const WorkItem = styled.li`
  display: flex;
  align-items: flex-start; /* Align icon to top of text */
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ItemIcon = styled.span`
  font-size: 2rem; /* Adjust icon size */
  color: ${({ theme }) => theme.colors.accentOrange};
  margin-right: 20px;
  min-width: 40px; /* Ensure space for icon */
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
    margin-right: 15px;
  }
`;

export const ItemText = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textDark};
  line-height: 1.6;
  font-weight: 500;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;