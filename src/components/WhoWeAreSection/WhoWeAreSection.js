import React from 'react';
import {
  WhoWeAreContainer,
  WhoWeAreWrapper,
  WhoWeAreRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  StarIcon // Assuming you'll have a star icon component or SVG
} from './WhoWeAreElements';
import whoWeAreImg from '../../assets/images/who-we-are.png'; // Replace with your image
import Icon from '../../assets/images/whoweareicon.png';
const WhoWeAreSection = () => {
  return (
    <WhoWeAreContainer id="who-we-are">
      <WhoWeAreWrapper>
        <WhoWeAreRow>
          <Column1>
            <TextWrapper>
              <TopLine>
                <StarIcon src={Icon} alt={'Icon'}/>{'  Who we are'}   {/* Replace ✦ with actual icon */}
              </TopLine>
              <Heading>
                Power Media Partners (PMP) is your embedded field team – building brand credibility and market traction where it actually happens.
              </Heading>
              <Subtitle>
                We create bilingual, real-world content that distributors and installers use to earn trust, move product, and dominate new territories.
              </Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={whoWeAreImg} alt="Field team" />
            </ImgWrap>
          </Column2>
        </WhoWeAreRow>
      </WhoWeAreWrapper>
    </WhoWeAreContainer>
  );
};

export default WhoWeAreSection;