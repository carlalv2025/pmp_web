import React from 'react';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from './HeroElements';
import heroVideo from '../../assets/videos/hero-video.mp4'; // Your video

const HeroSection = () => {
  return (
    <HeroContainer id="hero">
      <HeroBg>
        <VideoBg autoPlay loop muted playsInline src={heroVideo} type="video/mp4">
          Your browser does not support the video tag.
        </VideoBg>
      </HeroBg>
      {/* <HeroContent>
        <HeroH1>Presence.</HeroH1>
        <HeroP>Not Ads.</HeroP>
      </HeroContent> */}
    </HeroContainer>
  );
};

export default HeroSection;