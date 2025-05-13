import React from 'react';
import {
  WhatWeDoContainer,
  WhatWeDoWrapper,
  SectionHeader,
  StarIcon,
  MainHeading,
  SubHeading,
  ContentLayout,
  MainImageWrapper,
  MainImage,
  ServicesGrid,
  ServiceItem,
  ServiceImage,
  ServiceCaption
} from './WhatWeDoElements';

// Import your images
import mainWorkerImg from '../../assets/images/what-we-do-main.png';
import salesKitsImg from '../../assets/images/what-we-do-sales-kits.png';
import docuStyleImg from '../../assets/images/what-we-do-docu-style.png';
import podcastImg from '../../assets/images/what-we-do-podcast.png';
import testimonialImg from '../../assets/images/what-we-do-main.png';
import streetLevelImg from '../../assets/images/what-we-do-street-level.png'; // Assuming there is a 5th item in design or placeholder


const services = [
  { img: salesKitsImg, caption: 'Digital Sales Kits + LMS Content' },
  { img: docuStyleImg, caption: 'Docu-Style Install Stories' },
  { img: podcastImg, caption: 'Bilingual Podcast Production (On Location)' },
  { img: testimonialImg, caption: 'Installer Testimonial Reels' },
  { img: streetLevelImg, caption: 'Street-Level Campaigns' }, // The design shows 5 items around the main image
];

const WhatWeDoSection = () => {
  return (
    <WhatWeDoContainer id="what-we-do">
      <WhatWeDoWrapper>
        <SectionHeader>
          <StarIcon>✧</StarIcon> {/* Replace with actual icon */}
          <MainHeading>What we do</MainHeading>
          <SubHeading>Built for the Field. Designed to Sell.</SubHeading>
        </SectionHeader>

        <ContentLayout>
          {/* <MainImageWrapper>
            <MainImage src={mainWorkerImg} alt="Worker in hard hat" />
          </MainImageWrapper> */}
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceItem key={index} className={`service-item-${index}`}> {/* For specific positioning if needed */}
                <ServiceImage src={service.img} alt={service.caption} />
                <ServiceCaption>{service.caption}</ServiceCaption>
              </ServiceItem>
            ))}
          </ServicesGrid>
        </ContentLayout>
      </WhatWeDoWrapper>
    </WhatWeDoContainer>
  );
};

export default WhatWeDoSection;