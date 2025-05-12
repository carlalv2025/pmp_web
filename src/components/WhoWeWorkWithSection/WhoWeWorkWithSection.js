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
import Expanding from '../../assets/images/expanding.png'
import Distributor from '../../assets/images/distributor.png'
import Epc from '../../assets/images/epc.png'
import Media from '../../assets/images/media.png'
// Assume you have icons, e.g., from react-icons
// import { FaMicrophone, FaShippingFast, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const workItems = [
  { icon: Expanding, text: 'U.S. manufacturers expanding into LATAM' }, // Placeholder icons
  { icon: Distributor, text: 'Distributors launching new brands or verticals' },
  { icon: Epc, text: 'EPCs needing field-level brand content' },
  { icon: Media, text: 'Media-forward companies ready to own their voice operate' },
];


const WhoWeWorkWithSection = () => {
  return (
    <WhoWorkWithContainer id="who-we-work-with">
      <WhoWorkWithWrapper>
        <SectionTitle>
          <PeopleIcon></PeopleIcon> {/* Placeholder icon */}
          Who we work with
        </SectionTitle>
        <ContentBox>
          <WorkItemList>
            {workItems.map((item, index) => (
              <WorkItem key={index}>
               <ItemIcon src={item.icon} alt="" />
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