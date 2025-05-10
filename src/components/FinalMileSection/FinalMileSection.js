import React from 'react';
import {
  FinalMileContainer,
  FinalMileWrapper,
  FinalMileRow,
  Column1,
  Column2,
  TextWrapper,
  StarIcon,
  Heading,
  Paragraph,
  ImgWrap,
  Img,
  ActivationText
} from './FinalMileElements';
import finalMilePersonImg from '../../assets/images/final-mile-person.png'; // Replace

const FinalMileSection = () => {
  return (
    <FinalMileContainer id="final-mile">
      <FinalMileWrapper>
        <FinalMileRow>
          <Column1>
            <TextWrapper>
              <Heading>
                <StarIcon>✲</StarIcon> {/* Replace with actual icon */}
                The final Mile
              </Heading>
              <Paragraph>
                From Factory to Field. <br />
                From Content to _______. {/* Fill in the blank from design if visible */}
              </Paragraph>
              <Paragraph>
                PMP embeds with your top dealers, EPCs, and boots-on-the-ground crews to generate the kind of trust you can't fake – and sales tools they'll actually use.
              </Paragraph>
              <Paragraph>
                We show up, film installs, conduct bilingual interviews, and convert local experience into brand momentum.
              </Paragraph>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={finalMilePersonImg} alt="Person with camera" />
            </ImgWrap>
          </Column2>
        </FinalMileRow>
        <ActivationText>
          We activate the <strong>presence layer</strong> your competition forgets.
        </ActivationText>
      </FinalMileWrapper>
    </FinalMileContainer>
  );
};

export default FinalMileSection;