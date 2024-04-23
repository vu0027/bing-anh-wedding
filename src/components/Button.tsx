import Button from '@mui/material/Button';
import React from 'react';
import content from 'src/assets/content';

export const YoutubeButton = ({ style, selectedLanguage }: { style?: React.CSSProperties, selectedLanguage: any }) => {
  const translatedContent = (content as any)[selectedLanguage];

  return (
    <Button
      variant="contained"
      onClick={() => window.open('https://youtu.be')}
      style={{ borderRadius: '18px', background: '#ff0000', ...style }}
    >
      {translatedContent.youtubeButton}
    </Button>
  );
};

export const RSVPButton = ({ style, selectedLanguage }: { style?: React.CSSProperties, selectedLanguage: any }) => {
  const translatedContent = (content as any)[selectedLanguage];
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Button
        variant="contained"
        onClick={() => {
          window.open('/Seat_Map.pdf');
        }}
        style={{ borderRadius: '18px', background: '#ff7991', ...style }}
      >
        {translatedContent.rsvpSection}
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          window.open('/WeddingDetails.pdf');
        }}
        style={{ marginLeft: '10px', borderRadius: '18px', background: '#ff7991', ...style }}
      >
        {translatedContent.plan}
      </Button>
    </div>
  );
};
