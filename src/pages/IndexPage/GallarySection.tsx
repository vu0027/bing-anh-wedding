import React from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';
import styled from '@emotion/styled';
import { JEJU_PICS, STUDIO_PICS } from 'src/assets/images';
import { VerticalCarousel } from 'src/components/VerticalCarousel';

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

const StyledVerticalCarousel = styled(VerticalCarousel)`
  border: 2px solid ${COLORS.highlight2};
  border-radius: 8px;
  overflow: hidden;
  max-width: 100%;
  margin: 0 auto;
`;

const GallarySection = () => {
  return (
    <Section backgroundColor={COLORS.highlight3} title={`Gallery`}>
      <AnimatedWrapper>
        <StyledVerticalCarousel
          images={STUDIO_PICS}
          alt="prewedding"
          showSmallerImageOnMobile={true}
        />
      </AnimatedWrapper>
      <Heading style={{ marginTop: 48 }}>
        Swipe to the right for more pictures.
      </Heading>
      <AnimatedWrapper delay="0.2s">
        <StyledVerticalCarousel alt="dating" images={JEJU_PICS} />
      </AnimatedWrapper>
      <Heading style={{ marginTop: 48 }}>Dating Photos</Heading>
    </Section>
  );
};

const YouTubeEmbed = () => (
  <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/SVtq2m0853s?controls=0&amp;autoplay=1&amp;mute=1"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

export default GallarySection;
