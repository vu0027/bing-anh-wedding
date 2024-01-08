import Button from '@mui/material/Button';
import React from 'react';
import content from 'src/assets/content';

export const YoutubeButton = ({ style, selectedLanguage }: { style?: React.CSSProperties, selectedLanguage: any }) => {
  const translatedContent = (content as any)[selectedLanguage];

  return (
    <Button
      variant="contained"
      onClick={() => window.open('https://youtu.be')}
      style={{ borderRadius: '18px', ...style }}
    >
      {translatedContent.youtubeButton}
    </Button>
  );
};

export const RSVPButton = ({ style, selectedLanguage }: { style?: React.CSSProperties, selectedLanguage: any }) => {
  const translatedContent = (content as any)[selectedLanguage];
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          window.open('https://forms.gle/EwxwJWqd96f3h3M5A');
        }}
        style={{ borderRadius: '18px', ...style }}
      >
        {translatedContent.rsvpSection}
      </Button>
    </>
  );
};
