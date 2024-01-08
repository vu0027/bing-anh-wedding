import Button from '@mui/material/Button';
import React from 'react';

export const YoutubeButton = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <Button
      variant="contained"
      onClick={() => window.open('https://youtu.be')}
      style={{borderRadius: '18px', ...style}}
    >
      Wedding Video
    </Button>
  );
};

export const RSVPButton = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          window.open('https://forms.gle/EwxwJWqd96f3h3M5A');
        }}
        style={{borderRadius: '18px', ...style}}
        >
        R.S.V.P
      </Button>
    </>
  );
};
