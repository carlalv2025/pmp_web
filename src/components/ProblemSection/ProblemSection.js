import React from 'react';
import {
  ProblemContainer,
  ProblemWrapper,
  ProblemRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Paragraph,
  ProblemList,
  ProblemListItem,
  CheckIcon,
  ImgWrap,
  Img,
  PmpLogo,
  PmpLogoImg
} from './ProblemElements';
import problemSolarPanelImg from '../../assets/images/problem-solar-panel.png'; // Replace
import pmpLogoImg from '../../assets/images/problem-pmp-logo.png'; // Replace

const ProblemSection = () => {
  return (
    <ProblemContainer id="the-problem">
      <ProblemWrapper>
        <ProblemRow>
          <Column1>
            <ImgWrap>
              <Img src={problemSolarPanelImg} alt="Solar panel cleaning" />
            </ImgWrap>
          </Column1>
          <Column2>
            <TextWrapper>
              <PmpLogo>
                <PmpLogoImg src={pmpLogoImg} alt="PMP Logo" />
              </PmpLogo>
              <TopLine>The problem</TopLine>
              <Heading>
                It's Easy to Sell To a Distributor. <br/>
                But Who Helps Them Sell Out?
              </Heading>
              <Paragraph>
                Most solar brands stop at delivery. They send a Dropbox folder and call it marketing.
              </Paragraph>
              <Paragraph>
                We fill the <strong>final mile</strong> between pallet and rooftop. Because what good is product in a warehouse if no one's talking about it?
              </Paragraph>
              <ProblemList>
                <ProblemListItem>
                  <CheckIcon>✓</CheckIcon> Generic logos & PDFs
                  <span>Custom reels, podcasts, & proof</span>
                </ProblemListItem>
                <ProblemListItem>
                  <CheckIcon>✓</CheckIcon> Centralized delays
                  <span>On-the-ground activation</span>
                </ProblemListItem>
                <ProblemListItem>
                  <CheckIcon>✓</CheckIcon> No installer buy-in
                  <span>Installer-led brand belief</span>
                </ProblemListItem>
                <ProblemListItem>
                  <CheckIcon>✓</CheckIcon> Passive marketing
                  <span>Culture-connected media that moves</span>
                </ProblemListItem>
              </ProblemList>
            </TextWrapper>
          </Column2>
        </ProblemRow>
      </ProblemWrapper>
    </ProblemContainer>
  );
};

export default ProblemSection;