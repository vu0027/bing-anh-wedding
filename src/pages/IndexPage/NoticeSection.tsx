import React from 'react';
import { COLORS } from 'src/assets/theme';
import { RSVPButton, YoutubeButton } from 'src/components/Button';
import Section from 'src/components/Section';
import Image from 'next/image';
import tobox from 'public/tobox.png';

const NoticeSection = () => {
  return (
    <Section
      backgroundColor={COLORS.highlight3}
      title={`Useful information to know in advance.`}
    >
      <ul style={{ listStyle: 'none', margin: 0 }}>
        <QnA
          question="How can I reservation?"
          answer={
            <>
              If you are attending the party, please use the button below to
              inform us of the number of participants and meal options. It is
              very helpful in preparing 😄
              <RSVPButton style={{ marginTop: 3 }} />
            </>
          }
        />
        <QnA
          question="What time can I go?"
          answer={
            <>
              The ceremony starts at 2:00PM and photography is allowed from
              1:00PM. After the ceremony, we will take some photo and go
              straight to the winery. I will be 30 minutes drive from church to
              the winery.
              <Image
                src={tobox}
                alt="Photo"
                draggable={false}
                style={{ marginTop: 3 }}
              />
            </>
          }
        />
        <QnA
          question="Unfortunately, I couldn’t go."
          answer={
            <>
              We will post our wedding video on Youtube when it is available so
              you can watch later.
              <YoutubeButton style={{ marginTop: 3 }} />
            </>
          }
        />
      </ul>
    </Section>
  );
};

function QnA({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) {
  return (
    <li>
      <strong>Q. {question}</strong>
      <div style={{ padding: '0 0 1.6rem' }}>{answer}</div>
    </li>
  );
}

export default NoticeSection;
