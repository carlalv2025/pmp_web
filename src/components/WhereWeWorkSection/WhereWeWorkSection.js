import React from 'react';
import {
  WhereWeWorkContainer,
  WhereWeWorkWrapper,
  SectionHeading,
  LocationIcon,
  SubHeading,
  LocationsGrid,
  LocationCard,
  LocationImage,
  ImageOverlay,
  LocationName,
  LocationFlag, // You'll need flag images or SVGs
  BottomText
} from './WhereWeWorkElements';

import puertoRicoImg from '../../assets/images/puerto-rico.jpg';
import texasImg from '../../assets/images/texas.jpg';
import latamImg from '../../assets/images/latam.jpg';

// Placeholder flag URLs - replace with actual flag assets
const prFlag = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Puerto_Rico.svg/125px-Flag_of_Puerto_Rico.svg.png';
const usFlag = 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png';
const coFlag = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/125px-Flag_of_Colombia.svg.png';


const locations = [
  { name: 'Puerto Rico', img: puertoRicoImg, flag: prFlag, description: 'Ground zero for grid resilience and cultural storytelling' },
  { name: 'Texas', img: texasImg, flag: usFlag, description: 'Texas + US Installers Markets' },
  { name: 'Latam', img: latamImg, flag: coFlag, description: 'Colombia + LATAM' },
];

const WhereWeWorkSection = () => {
  return (
    <WhereWeWorkContainer id="where-we-work">
      <WhereWeWorkWrapper>
        <SectionHeading>
          <LocationIcon>📍</LocationIcon> {/* Replace with actual icon */}
          Where we work
        </SectionHeading>
        <SubHeading>We launch solar brands locally in:</SubHeading>
        <LocationsGrid>
          {locations.map((loc, index) => (
            <LocationCard key={index}>
              <LocationImage src={loc.img} alt={loc.name} />
              <ImageOverlay>
                <LocationFlag src={loc.flag} alt={`${loc.name} flag`} />
                <LocationName>{loc.name}</LocationName>
              </ImageOverlay>
              {/* Description below the card, not overlayed in this version based on image structure */}
              {/* <p>{loc.description}</p> */}
            </LocationCard>
          ))}
        </LocationsGrid>
        {/* The description text is below each image in the design */}
        <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', color: '#ccc', marginTop: '20px', flexWrap: 'wrap' }}>
          {locations.map((loc, index) => (
            <p key={index} style={{ maxWidth: '30%', margin: '10px' }}>{loc.description}</p>
          ))}
        </div>
        <BottomText>
          These aren't passive markets — they're personal, technical, and relationship-driven. That's where PMP thrives.
        </BottomText>
      </WhereWeWorkWrapper>
    </WhereWeWorkContainer>
  );
};

export default WhereWeWorkSection;