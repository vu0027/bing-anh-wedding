import React from 'react';
import Section from 'src/components/Section';
import styled from '@emotion/styled';
import { STUDIO_PICS } from 'src/assets/images';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import content from 'src/assets/content';
import { COLORS } from 'src/assets/theme';

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

const YouTubeEmbed = () => (
  <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/5I2UPxa9wxs"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

const GallarySection = ({ selectedLanguage }: any)  => {
  const translatedContent = (content as any)[selectedLanguage].accountSection;

  const CarouselFrame = styled.div`
    display: flex;
    border: 10px solid ${COLORS.highlight1};
    border-radius: 50px;
    overflow: hidden;
    width: 100%;
  `;

  return (
    <Section backgroundColor="white" title={`Gallery`}>
      <AnimatedWrapper>
        <CarouselFrame>
          <Carousel showThumbs={false} showStatus={false}>
            {STUDIO_PICS.map((image, index) => (
              <div key={index}>
                <img style={{overflow: 'hidden'}} src={image.src} alt={`prewedding-${index}`} />
              </div>
            ))}
          </Carousel>
        </CarouselFrame>
      </AnimatedWrapper>
      <Heading style={{ marginTop: 48 }}>
        {translatedContent && translatedContent.swipeRightMessage}
      </Heading>
      <p>Many more to come ❤️❤️❤️.</p>
      <YouTubeEmbed />
    </Section>
  );
};

export default GallarySection;
