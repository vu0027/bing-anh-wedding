import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Countdown from 'react-countdown';

const SplashSection = () => {
  const [isClient, setIsClient] = useState(false);
  const weddingDate = new Date('May 5, 2024');

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <SplashContainer>
      <JejuVideo />
      <FlexContainer>
        <MainHeading>Bing and Anh are getting married.</MainHeading>
        <CountdownContainer>
          {isClient && (
            <Countdown date={weddingDate} renderer={CountdownRenderer} />
          )}
        </CountdownContainer>
      </FlexContainer>
    </SplashContainer>
  );
};

const SplashContainer = styled.div`
  height: 100vh;
  color: white;
  font-family: 'Mea Culpa', sans-serif;
  font-size: 50px;
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
  font-size: 36px;
  margin-bottom: 16px;
  color: #ffeb3b; /* Custom text color for the countdown */
`;

const CountdownRenderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: any) => {
  if (completed) {
    return <CountdownComplete>It&apos;s Wedding Day!</CountdownComplete>;
  } else {
    return (
      <CountdownText>
        {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
      </CountdownText>
    );
  }
};

const CountdownText = styled.span`
  font-size: 50px;
  font-weight: bold;
  color: #ffffff; /* Custom text color for the countdown */
`;

const CountdownComplete = styled.span`
  font-weight: bold;
  color: #4caf50; /* Custom text color for the completed countdown */
`;

const EventDetails = styled.div`
  font-size: 18px;
  color: #bdbdbd; /* Custom text color for event details */
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
