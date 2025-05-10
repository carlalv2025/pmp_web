import React from 'react';
import {
  WhoWorkWithContainer,
  WhoWorkWithWrapper,
  SectionTitle,
  PeopleIcon,
  ContentBox,
  WorkItemList,
  WorkItem,
  ItemIcon,
  ItemText
} from './WhoWeWorkWithElements';

// Assume you have icons, e.g., from react-icons
// import { FaMicrophone, FaShippingFast, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const workItems = [
  { icon: '🎙️', text: 'U.S. manufacturers expanding into LATAM' }, // Placeholder icons
  { icon: '🚚', text: 'Distributors launching new brands or verticals' },
  { icon: '✨', text: 'EPCs needing field-level brand content' },
  { icon: '📍', text: 'Media-forward companies ready to own their voice operate' },
];


const WhoWeWorkWithSection = () => {
  return (
    <WhoWorkWithContainer id="who-we-work-with">
      <WhoWorkWithWrapper>
        <SectionTitle>
          <PeopleIcon>👥</PeopleIcon> {/* Placeholder icon */}
          Who we work with
        </SectionTitle>
        <ContentBox>
          <WorkItemList>
            {workItems.map((item, index) => (
              <WorkItem key={index}>
                <ItemIcon>{item.icon}</ItemIcon>
                <ItemText>{item.text}</ItemText>
              </WorkItem>
            ))}
          </WorkItemList>
        </ContentBox>
      </WhoWorkWithWrapper>
    </WhoWorkWithContainer>
  );
};

export default WhoWeWorkWithSection;