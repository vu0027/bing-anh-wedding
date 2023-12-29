import { track } from '@amplitude/analytics-browser';
import styled from '@emotion/styled';
import React from 'react';

export const Button = ({
  children,
  onClick,
  backgroundColor = 'black',
  style,
}: {
  children: string;
  onClick: () => void;
  backgroundColor?: string;
  style?: React.CSSProperties;
}) => (
  <ButtonWrapper
    backgroundColor={backgroundColor}
    onClick={() => {
      track(children);
      onClick();
    }}
    style={style}
  >
    {children}
  </ButtonWrapper>
);

const ButtonWrapper = styled.button`
  background: ${({ backgroundColor }: { backgroundColor: string }) =>
    backgroundColor};
  border: 1px solid #000000b5;
  color: white;
  width: 100%;
  max-width: 800px;
  padding: 20px 13px;
  border-radius: 6px;
  font-size: 1rem;
`;

export const YoutubeButton = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <Button
      backgroundColor="#ef0014"
      onClick={() => window.open('https://youtu.be')}
      style={style}
    >
      Wedding Video
    </Button>
  );
};

export const RSVPButton = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <>
      <Button
        backgroundColor="#8554ff"
        onClick={() => {
          window.open('https://forms.gle/EwxwJWqd96f3h3M5A');
        }}
        style={style}
      >
        R.S.V.P
      </Button>
      <div style={{ fontSize: '0.9rem', marginTop: 10, paddingBottom: 0 }}>
        * If corrections are needed, please write again.
      </div>
    </>
  );
};
