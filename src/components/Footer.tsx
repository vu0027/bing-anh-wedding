import styled from '@emotion/styled';
import React from 'react';
import { GREYS } from 'src/assets/theme';


const TimelineSection = () => {
  return (
    <Footer>
      <h3>Made by Bing-Hao and Anh</h3>
      <table>
        <tbody>
          <tr>
            <td>We are filled with excitement for our upcoming wedding</td>
          </tr>
          <tr>
            <td>and we'd love it if you could join us.</td>
          </tr>
          <tr>
            <td>It would mean a lot to have you there with us on this special day!</td>
          </tr>
        </tbody>
      </table>
    </Footer>
  );
};

const Footer = styled.footer`
  background: ${GREYS.grey1};
  color: white;
  padding: 24px;
  display: flex;
  justify-content: space-between;
`;

export default TimelineSection;
