import React from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';
import Image from 'next/image';
import { BorderedTable } from 'src/components/Table';
import avatarImage from 'public/couple.png';

const IntroSection = () => {
  return (
    <Section backgroundColor={COLORS.highlight1}>
      <WelcomeText />
      <div style={{ position: 'relative' }}>
        <AvatarImage />
        <InfoTable />
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
        // sizes="(min-width: 75em) 10vw,
        //         (min-width: 48em) 10vw,
        //         10vw"
        // layout="responsive"
        style={{ transform: 'scaleX(-1)' }}
      />
    </div>
  );
};

const WelcomeText = () => {
  return (
    <div>
      <p>
        We are getting married after 4 years together.
        <br />
        It&apos;s hard to imagine time without each other, so
        <br />
        we&apos;re starting season 2 of our relationship.
      </p>

      <p>
        We will do ceremony at Saint Andrew Dung-Lac Catholic Church.
        <br />
        We would like to invite my guests to Clauren Ridge Vineyard and Winery
        <br />
        We prepared delicious food and our favorite drinks.
        <br />I hope you come and have fun.
      </p>
    </div>
  );
};

const InfoTable = () => {
  return (
    <BorderedTable style={{ margin: '3rem 0 9rem', position: 'relative' }}>
      <tbody>
        <tr>
          <td>when</td>
          <td>
            Sunday, May 5, 2024
            <br />
            Ceremony starts at 2PM, Party starts at 5PM.
          </td>
        </tr>
        <tr>
          <td>where</td>
          <td>
            Church: 3115 SW 59th St, Oklahoma City, OK 73159 <br />
            Winery: 6000 W Waterloo Rd, Edmond, OK 73025
          </td>
        </tr>
      </tbody>
    </BorderedTable>
  );
};

export default IntroSection;
