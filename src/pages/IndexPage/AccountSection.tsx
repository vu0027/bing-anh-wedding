import React from 'react';
import { COLORS } from 'src/assets/theme';
import Collapsible from 'src/components/Collapsible';
import Section from 'src/components/Section';
import copyTextToClipboard from 'src/utils/copyToClipboard';

const AccountSection = () => {
  return (
    <Section backgroundColor={COLORS.highlight2} title="Honeymoon fund">
      <Collapsible
        title="View Groom Account"
        contents={
          <div>
            <CopyInfo />
            <Acocunt
              bankName="Zelle"
              accountNo="405 510 2655"
              name="Bing-Hao Chiang"
            />
            <Acocunt
              bankName="Venmo"
              accountNo="Bing-Hao-Chiang"
              name="Bing-Hao Chiang"
            />
          </div>
        }
      />
      <Collapsible
        title="View Bride Account"
        contents={
          <div>
            <CopyInfo />
            <Acocunt bankName="Zelle" accountNo="405 604 7365" name="Anh Vu" />
            <Acocunt bankName="Venmo" accountNo="anhvucs" name="Anh Vu" />
          </div>
        }
      />
      <div>We appreciate you making this happen.</div>
    </Section>
  );
};

const CopyInfo = () => (
  <div style={{ fontSize: '0.9em', fontStyle: 'italic', marginBottom: 3 }}>
    Click to copy the account number.
  </div>
);

const Acocunt = ({
  bankName,
  accountNo,
  name,
}: {
  bankName: string;
  accountNo: string;
  name: string;
}) => {
  return (
    <div
      onClick={() => {
        copyTextToClipboard(accountNo, () => {
          alert(`${name}'s ${bankName} is copied.`);
        });
      }}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 5,
      }}
    >
      <div>{bankName}</div>
      <div>{accountNo}</div>
      <div>{name}</div>
    </div>
  );
};

export default AccountSection;
