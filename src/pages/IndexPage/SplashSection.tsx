import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Countdown from 'react-countdown';
import content from 'src/assets/content';
import { RSVPButton } from 'src/components/Button';

const SplashSection = ({ selectedLanguage }: any) => {
  const [isClient, setIsClient] = useState(false);
  const weddingDate = new Date('May 5, 2024');

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <SplashContainer>
      <JejuVideo />
      <FlexContainer>
        <MainHeading>{(content as any)[selectedLanguage].mainHeading}</MainHeading>
        <CountdownContainer>
          {isClient && (
            <Countdown date={weddingDate} renderer={(props) => <CountdownRenderer {...props} selectedLanguage={selectedLanguage} />} />
            )}
        </CountdownContainer>
        <RSVPButton selectedLanguage={selectedLanguage}/>
      </FlexContainer>
    </SplashContainer>
  );
};

const SplashContainer = styled.div`
  height: 100vh;
  color: white;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 15px; /* Adjust the font size for smaller screens */
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  text-align: center;
`;

const MainHeading = styled.h1`
  margin: 61vh 0 24px;
`;

const CountdownContainer = styled.div`
  font-size: 6px;
  margin-bottom: 16px;
  color: #ffeb3b; /* Custom text color for the countdown */
`;

const CountdownRenderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
  selectedLanguage,
}: any) => {
  const translatedContent = (content as any)[selectedLanguage];

  if (completed) {
    return <CountdownComplete>{translatedContent && translatedContent.mainHeading}</CountdownComplete>;
  } else {
    return (
      <CountdownText>
        {days} {translatedContent && translatedContent.days}, {hours} {translatedContent && translatedContent.hours}, {minutes} {translatedContent && translatedContent.minutes}, {seconds} {translatedContent && translatedContent.seconds}
      </CountdownText>
    );
  }
};

const CountdownText = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const CountdownComplete = styled.span`
  font-weight: bold;
  color: #4caf50; /* Custom text color for the completed countdown */
`;

const JejuVideo = () => {
  return (
    <video
      controls={false}
      loop
      muted
      autoPlay
      playsInline
      style={{
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        position: 'absolute',
        zIndex: -1,
        opacity: 0.7,
      }}
    >
      <source src={'/binganh.mp4'} />
    </video>
  );
};

export default SplashSection;
