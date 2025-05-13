import React from 'react';
import {
  HowItWorksContainer,
  HowItWorksWrapper,
  HowItWorksRow,
  Column1,
  Column2,
  ImgWrap,
  Img,
  TextWrapper,
  SectionTitle,
  SunIcon,
  ModelTitle,
  StepsList,
  StepItem
} from './HowItWorksElements';
import howItWorksSolarImg from '../../assets/images/how-it-works-solar.png'; // Replace

const steps = [
  "Field Intel & Storyboarding",
  "Go-Live Media Blitz",
  "Installer-Facing Toolkit Creation",
  "LMS Training & Certification",
  "Community & Cultural Integration",
  "Ongoing Field Ops & Reporting" // Added from image crop
];

const HowItWorksSection = () => {
  return (
    <HowItWorksContainer id="how-it-works">
      <HowItWorksWrapper>
        <HowItWorksRow>
          <Column1>
            <ImgWrap>
              <Img src={howItWorksSolarImg} alt="Solar panel installation" />
            </ImgWrap>
          </Column1>
          <Column2>
            <TextWrapper>
              <SectionTitle>
                How it works <SunIcon>🔆</SunIcon> {/* Replace with actual icon */}
              </SectionTitle>
              <ModelTitle>The PMP Field Activation Model</ModelTitle>
              <StepsList>
                {steps.map((step, index) => (
                  <StepItem key={index}>
                    <span>{index + 1}.</span> {step}
                  </StepItem>
                ))}
              </StepsList>
            </TextWrapper>
          </Column2>
        </HowItWorksRow>
      </HowItWorksWrapper>
    </HowItWorksContainer>
  );
};

export default HowItWorksSection;