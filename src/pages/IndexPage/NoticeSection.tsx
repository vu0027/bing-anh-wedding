import React from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';
import { RSVPButton, YoutubeButton } from 'src/components/Button';
import content from 'src/assets/content';

const NoticeSection = ({ selectedLanguage }: any) => {
  const translatedContent = (content as any)[selectedLanguage];

  return (
    <Section
      backgroundColor={COLORS.highlight1}
      title={translatedContent.usefulInfoSection.title}
    >
      <ul style={{ listStyle: 'none', margin: 0 }}>
        {translatedContent.usefulInfoSection.questions.map(
          (qna: any, index: number) => (
            <QnA
              key={index}
              question={qna.question}
              answer={qna.answer}
              selectedLanguage={selectedLanguage}
              translatedContent={translatedContent}
            />
          )
        )}
      </ul>
    </Section>
  );
};

function QnA({
  question,
  answer,
  selectedLanguage,
  translatedContent
}: {
  question: string;
  answer: React.ReactNode;
  selectedLanguage: string;
  translatedContent: any,
}) {
  return (
    <li>
      <strong>Q. {question}</strong>
      <div style={{ padding: '0 0 1.6rem', whiteSpace: 'pre-wrap', overflow: 'hidden', wordBreak: 'break-all' }}>
        {answer}
        {question === translatedContent.usefulInfoSection.questions[2].question && (
          <YoutubeButton
            selectedLanguage={selectedLanguage}
            style={{ marginTop: 3 }}
          />
        )}
        {question === translatedContent.usefulInfoSection.questions[0].question && (
          <React.Fragment>
            <br />
            <RSVPButton
              selectedLanguage={selectedLanguage}
              style={{ marginTop: 3 }}
            />
          </React.Fragment>
        )}
      </div>
    </li>
  );
}

export default NoticeSection;
