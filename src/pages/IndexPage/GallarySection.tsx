import React from 'react';
import Section from 'src/components/Section';
import styled from '@emotion/styled';
import { JEJU_PICS, STUDIO_PICS } from 'src/assets/images';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import content from 'src/assets/content';

const Heading = styled.h3`
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 14px;
`;

const AnimatedWrapper = styled.div<{ delay?: string }>`
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  border-radius: 10px;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1);
  }

  animation: fadeInUp 0.8s forwards;
  animation-delay: ${props => props.delay || '0s'};

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

const GallarySection = ({ selectedLanguage }: any)  => {
  const translatedContent = (content as any)[selectedLanguage].accountSection;
  return (
    <Section backgroundColor="white" title={`Gallery`}>
      <AnimatedWrapper>
        <Carousel showThumbs={false} showStatus={false}>
          {STUDIO_PICS.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={`prewedding-${index}`} />
            </div>
          ))}
        </Carousel>
      </AnimatedWrapper>
      <Heading style={{ marginTop: 48 }}>
        {translatedContent && translatedContent.swipeRightMessage}
      </Heading>
      <AnimatedWrapper delay="0.2s">
        <Carousel showThumbs={false} showStatus={false}>
          {JEJU_PICS.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={`dating-${index}`} />
            </div>
          ))}
        </Carousel>
      </AnimatedWrapper>
    </Section>
  );
};



export default GallarySection;
