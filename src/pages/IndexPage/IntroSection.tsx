import React from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';
import Image from 'next/image';
import avatarImage from 'public/couple1.png';
import content from 'src/assets/content';
import styled from '@emotion/styled';

const StyledInfoTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 3rem 0 9rem;
  position: relative;

  td {
    width: 100%;
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }

  .youtube-container {
    margin-top: 1rem;
    width: 100%;
  }
}

`;
const YouTubeEmbed = () => (
  <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/1zeqyqxMNUU"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{backgroundColor: `${COLORS.highlight1} !important`}}
  ></iframe>
);

const IntroSection = ({ selectedLanguage }: any) => {

  return (
    <Section backgroundColor={COLORS.highlight1}>
      <WelcomeText selectedLanguage={selectedLanguage} />
      <div style={{ position: 'relative' }}>
        <AvatarImage />
        <InfoTable selectedLanguage={selectedLanguage} />
      </div>
    </Section>
  );
};

const AvatarImage = () => {
  return (
    <div
      style={{
        maxWidth: '230px',
        position: 'absolute',
        width: '100%',
        bottom: '-12rem',
        right: 0,
      }}
    >
      <Image
        src={avatarImage}
        alt=""
        layout="responsive"
      />
    </div>
  );
};
const WelcomeText = ({ selectedLanguage }: any) => {
  const translatedContent = (content as any)[selectedLanguage];

  return (
    <div style={{ textAlign: 'center', color: 'black', marginTop: '3rem' }}>
      <p style={{ fontSize: '0.85rem', lineHeight: '1.8', marginBottom: '1rem' }}>
        {translatedContent && translatedContent.introSection.paragraph1}
        <br />
        {translatedContent && translatedContent.introSection.paragraph2}
        <br />
        {translatedContent && translatedContent.introSection.paragraph3}
      </p>

      <p style={{ fontSize: '0.85rem', lineHeight: '1.8', marginBottom: '1rem' }}>
        {translatedContent && translatedContent.introSection.paragraph4}
        <br />
        {translatedContent && translatedContent.introSection.paragraph5}
        <br />
        {translatedContent && translatedContent.introSection.paragraph6}
        <br />
        {translatedContent && translatedContent.introSection.paragraph7}
      </p>
    </div>
  );
};


export const InfoTable = ({ selectedLanguage }: any) => {
  const translatedContent = (content as any)[selectedLanguage];

  return (
    <StyledInfoTable>
      <div>
        <strong>{translatedContent && translatedContent.introSection.paragraph8}</strong>
      </div>
      <div className="youtube-container">
        <YouTubeEmbed />
      </div>
    </StyledInfoTable>
  );
};

export default IntroSection;
