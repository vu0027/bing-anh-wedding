import styled from '@emotion/styled';
import React from 'react';
import content from 'src/assets/content';
import { GREYS } from 'src/assets/theme';

const Footer = ({ selectedLanguage }: any)  => {

  const translatedContent = (content as any)[selectedLanguage].invitation;

  return (
    <FooterCSS>
      <h3 style={{ fontSize: '0.8rem' }}>{translatedContent && translatedContent.madeBy}</h3>
      <table>
        <tbody>
          <tr>
            <td style={{ fontSize: '0.65rem' }}>{translatedContent && translatedContent.excitement}</td>
          </tr>
          <tr>
            <td style={{ fontSize: '0.65rem' }}>{translatedContent && translatedContent.love}</td>
          </tr>
          <tr>
            <td style={{ fontSize: '0.65rem' }}>
              {translatedContent && translatedContent.mean}
            </td>
          </tr>
        </tbody>
      </table>
    </FooterCSS>
  );
};

const FooterCSS = styled.footer`
  background: ${GREYS.grey1};
  color: white;
  padding: 24px;
  display: flex;
  justify-content: space-between;
`;

export default Footer;
