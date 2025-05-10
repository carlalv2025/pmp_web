import React from 'react';
import {
  LMSContainer,
  LMSWrapper,
  LMSRow,
  Column1,
  Column2,
  TextWrapper,
  TopLineIcon,
  TopLineText,
  Heading,
  Subtitle,
  FeatureList,
  FeatureItem,
  FeatureIcon,
  ImgWrap,
  Img,
  Slogan
} from './LMSSectionElements';
import lmsSolarImg from '../../assets/images/lms-solar.png'; // Replace with your image

const features = [
  "Deliver technical education in the field's language",
  "Strengthen installer trust and long-term loyalty",
  "Create content-driven certification paths that scale"
];

const LMSSection = () => {
  return (
    <LMSContainer id="lms-ecosystem">
      <LMSWrapper>
        <LMSRow>
          <Column1>
            <TextWrapper>
              <TopLineIcon>✲</TopLineIcon> {/* Placeholder star/sparkle icon */}
              <TopLineText>LMS <span className="accent">Ecosystem</span></TopLineText>
              <Heading>
                Building a Smarter Brand? <br/>
                Let's Train It Too.
              </Heading>
              <Subtitle>
                We help manufacturers and distributors build LMS ecosystems that:
              </Subtitle>
              <FeatureList>
                {features.map((feature, index) => (
                  <FeatureItem key={index}>
                    <FeatureIcon /> {/* Styled as an orange circle */}
                    {feature}
                  </FeatureItem>
                ))}
              </FeatureList>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={lmsSolarImg} alt="Solar panels on a roof" />
            </ImgWrap>
          </Column2>
        </LMSRow>
        <Slogan>
          Because knowledge builds confidence – and confidence drives adoption.
        </Slogan>
      </LMSWrapper>
    </LMSContainer>
  );
};

export default LMSSection;