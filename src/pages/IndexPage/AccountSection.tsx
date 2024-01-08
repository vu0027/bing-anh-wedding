import React from 'react';
import { COLORS } from 'src/assets/theme';
import Collapsible from 'src/components/Collapsible';
import Section from 'src/components/Section';
import copyTextToClipboard from 'src/utils/copyToClipboard';
import Image from 'next/image';
import tobox from 'public/tobox.png';
import content from 'src/assets/content';

const AccountSection = ({ selectedLanguage }: any) => {
  const translatedContent = (content as any)[selectedLanguage].accountSection;

  return (
    <Section backgroundColor={COLORS.highlight2} title={translatedContent.title}>
      <Collapsible
        title={translatedContent.viewG}
        contents={
          <div>
            <CopyInfo translatedContent={translatedContent} />
            <Account
              bankName="Zelle"
              accountNo="405 510 2655"
              name="Bing-Hao Chiang"
              selectedLanguage={selectedLanguage}
            />
            <Account
              bankName="Venmo"
              accountNo="Bing-Hao-Chiang"
              name="Bing-Hao Chiang"
              selectedLanguage={selectedLanguage}
            />
          </div>
        }
      />
      <Collapsible
        title={translatedContent.viewB}
        contents={
          <div>
            <CopyInfo />
            <Account
              bankName="Zelle"
              accountNo="405 604 7365"
              name="Anh Vu"
              selectedLanguage={selectedLanguage}
            />
            <Account
              bankName="Venmo"
              accountNo="anhvucs"
              name="Anh Vu"
              selectedLanguage={selectedLanguage}
            />
          </div>
        }
      />
      <Image
        src={tobox}
        alt="Photo"
        draggable={false}
        style={{ marginTop: 3, maxWidth: '35rem', height: 'auto' }}
      />
      <div>{translatedContent.appreciate}</div>
    </Section>
  );
};

const CopyInfo = (translatedContent: any) => (
  <div style={{ fontSize: '0.9em', fontStyle: 'italic', marginBottom: 3 }}>
    {translatedContent.clickToCopy}
  </div>
);

const Account = ({
  bankName,
  accountNo,
  name,
  selectedLanguage,
}: {
  bankName: string;
  accountNo: string;
  name: string;
  selectedLanguage: string;
}) => {
  const translatedContent = (content as any)[selectedLanguage].accountSection;

  return (
    <div
      onClick={() => {
        copyTextToClipboard(accountNo, () => {
          alert(`${name}'s ${bankName} ${translatedContent.clickToCopy}`);
        });
      }}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 5,
        transition: 'background 0.3s ease', // Add transition for smooth effect
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#ffffff'; // Change border color on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent'; // Reset background color on leave
      }}
    >
      <div>{bankName}</div>
      <div>{accountNo}</div>
    </div>
  );
};

export default AccountSection;
