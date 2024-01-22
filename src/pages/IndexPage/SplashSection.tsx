import React, {useEffect, useRef, useState} from 'react';
import styled from '@emotion/styled';
import Countdown from 'react-countdown';
import content from 'src/assets/content';
import {RSVPButton} from 'src/components/Button';

const StyledParagraph = styled.p`
  font-family: 'Pacifico, cursive';
  font-size: 30px;

  @media (max-width: 600px) {
    font-size: 20px; /* Adjust this value for smaller font size on mobile */
  }
`;

const SplashSection = ({selectedLanguage} : any) => {
  const [typedDate, setTypedDate] = useState('');
  const fullDate = "05.05.2024";

  useEffect(() => {
    let currentIndex = 0;

    const typeNextCharacter = () => {
      if (currentIndex < fullDate.length) {
        setTypedDate(prevTypedDate => prevTypedDate + fullDate[currentIndex]);
        currentIndex += 1;
      }
    };

    const typingInterval = setInterval(typeNextCharacter, 500);
    // Adjust the typing speed here

    // Clean up the interval on component unmount
    return() => clearInterval(typingInterval);
  }, []); // Empty dependency array to run the effect only once on mount

  const [isClient, setIsClient] = useState(false);
  const weddingDate = new Date('May 5, 2024');

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (<SplashContainer>
    <FrontPageVideo/>
    <FlexContainer>
      <MainHeading> {
        (content as any)[selectedLanguage].mainHeading
      }</MainHeading>
      <StyledParagraph> {fullDate} - Oklahoma City, Oklahoma</StyledParagraph>
      <CountdownContainer> {
        isClient && (<Countdown date={weddingDate}
          renderer={
            (props) => <CountdownRenderer {...props}
              selectedLanguage={selectedLanguage}/>
          }/>)
      } </CountdownContainer>
      <RSVPButton selectedLanguage={selectedLanguage}/>
    </FlexContainer>
  </SplashContainer>);
};

const SplashContainer = styled.div `
  height: 100vh;
  color: white;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 15px; /* Adjust the font size for smaller screens */
  }
`;

const FlexContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  text-align: center;
  line-height: 1;
`;

const MainHeading = styled.h1 `
  margin: 35vh 0 24px;
  color: #fff;
  text-shadow: 0px 0px 10px rgb(0 0 0 / 100);
`;

const CountdownContainer = styled.div `
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
  selectedLanguage
} : any) => {
  const translatedContent = (content as any)[selectedLanguage];

  if (completed) {
    return <CountdownComplete> {
      translatedContent && translatedContent.mainHeading
    }</CountdownComplete>;
  } else {
    return (<CountdownTable>
      <tbody>
        <td>
          <CountRow>
            <CountdownCell> {days}</CountdownCell>
          </CountRow>
          <CountRow>
            <CountdownCell> {
              translatedContent && translatedContent.days
            }</CountdownCell>
          </CountRow>
        </td>
        <td>
          <CountdownSeparator>:</CountdownSeparator>
        </td>
        <td>
          <CountRow>
            <CountdownCell> {hours}</CountdownCell>
          </CountRow>
          <CountRow>
            <CountdownCell> {
              translatedContent && translatedContent.hours
            }</CountdownCell>
          </CountRow>
        </td>
        <td>
          <CountdownSeparator>:</CountdownSeparator>
        </td>
        <td>
          <CountRow>

            <CountdownCell> {minutes}</CountdownCell>
          </CountRow>
          <CountRow>
            <CountdownCell> {
              translatedContent && translatedContent.minutes
            }</CountdownCell>
          </CountRow>
        </td>
        <td>
          <CountdownSeparator>:</CountdownSeparator>
        </td>
        <td>
          <CountRow>
            <CountdownCell> {seconds}</CountdownCell>
          </CountRow>
          <CountRow>
            <CountdownCell> {
              translatedContent && translatedContent.seconds
            }</CountdownCell>
          </CountRow>
        </td>
      </tbody>
    </CountdownTable>);
  }
};

const CountRow = styled.tr`
  padding: 0;
  line-height: 1;
`
const CountdownTable = styled.table `
  width: 100%;
  text-align: center;
  border-collapse: collapse;
`;

const CountdownCell = styled.td `
  padding: 5px;
  color: #e23d7d;
  font-size: 25px;
  font-weight: bold;
  text-shadow: 0px 0px 8px rgb(255 255 255 / 100);
  @media (max-width: 600px) {
    font-size: 16px; /* Adjust this value for smaller font size on mobile */
  }
`;

const CountdownSeparator = styled.td `
  padding: 25px;
  color: #e23d7d;
  font-size: 35px;
  font-weight: bold;
  text-shadow: 0px 0px 8px rgb(255 255 255 / 100);
  @media (max-width: 600px) {
    font-size: 16px; /* Adjust this value for smaller font size on mobile */
    padding: 0;
  }
`;

const CountdownComplete = styled.span `
  font-weight: bold;
  color: #4caf50; /* Custom text color for the completed countdown */
`;

const FrontPageVideo = () => {
  const videoRef = useRef < any > (null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const video = videoRef.current;

    const handleEnded = () => { // Video has ended, restart playback
      video.currentTime = 0;
      video.play();
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    // Start playing when the component mounts
    if (isPlaying) {
      video.play().catch((error : any) => { // Autoplay may be blocked, handle the error
        console.error('Autoplay blocked:', error);
      });
    }

    return() => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, [isPlaying]);

  return (<video preload="metadata"
    ref={videoRef}
    controls={false}
    loop
    muted
    autoPlay
    playsInline
    style={
      {
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        position: 'absolute',
        zIndex: -1,
        opacity: 0.6
      }
  }>
    <source src={'/binganh.mp4'}
      type="video/mp4"/>
  </video>);
};

export default SplashSection;

