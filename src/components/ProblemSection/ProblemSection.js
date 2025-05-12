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
  PmpLogoImg,
  StarIcon,
  TheProblemIcon
} from './ProblemElements';
import problemSolarPanelImg from '../../assets/images/problem-solar-panel.png'; // Replace
import pmpLogoImg from '../../assets/images/pmp_logo_circle.png'; // Replace
import checkListImg from '../../assets/images/checklist.png'
import ProblemIcon from '../../assets/images/theProblemIcon.png';

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
               <div style={{ display: 'flex', justifyContent: 'flex-start'}}>
              <TheProblemIcon src={ProblemIcon}/>
              <TopLine >The problem</TopLine>
              </div>
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
                  <StarIcon src={checkListImg} alt={'Icon'}/> Generic logos & PDFs
                  <span>Custom reels, podcasts, & proof</span>
                </ProblemListItem>
                <ProblemListItem>
                  <StarIcon src={checkListImg} alt={'Icon'}/> Centralized delays
                  <span>On-the-ground activation</span>
                </ProblemListItem>
                <ProblemListItem>
                  <StarIcon src={checkListImg} alt={'Icon'}/> No installer buy-in
                  <span>Installer-led brand belief</span>
                </ProblemListItem>
                <ProblemListItem>
                  <StarIcon src={checkListImg} alt={'Icon'}/> Passive marketing
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