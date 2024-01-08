import React from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';
import Image from 'next/image';
import { BorderedTable } from 'src/components/Table';
import avatarImage from 'public/couple.png';
import content from 'src/assets/content';

const YouTubeEmbed = () => (
  <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/1zeqyqxMNUU"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
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
        sizes="(min-width: 75em) 10vw,
                (min-width: 48em) 10vw,
                10vw"
        layout="responsive"
        style={{ transform: 'scaleX(-1)' }}
      />
    </div>
  );
};

const WelcomeText = ({ selectedLanguage }: any) => {
  const translatedContent = (content as any)[selectedLanguage];

  return (
    <div>
      <p>
        {translatedContent && translatedContent.introSection.paragraph1}
        <br />
        {translatedContent && translatedContent.introSection.paragraph2}
        <br />
        {translatedContent && translatedContent.introSection.paragraph3}
      </p>

      <p>
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
    <BorderedTable style={{ margin: '3rem 0 9rem', position: 'relative' }}>
      <tbody>
        <tr>
          <td>{translatedContent && translatedContent.introSection.paragraph8}</td>
          <td>
            <YouTubeEmbed />
          </td>
        </tr>
      </tbody>
    </BorderedTable>
  );
};

export default IntroSection;
