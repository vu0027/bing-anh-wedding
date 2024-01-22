import React, { useEffect, useState } from 'react';
import Footer from 'src/components/Footer';
import AccountSection from './AccountSection';
import GallarySection from './GallarySection';
import IntroSection from './IntroSection';
import SplashSection from './SplashSection';
import TimelineSection from './TimelineSection';
import NoticeSection from './NoticeSection';
import * as amplitude from '@amplitude/analytics-browser';
import LanguageDropdown from 'src/components/LanguageDropdown';
import styled from '@emotion/styled';

const Gap = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`
const IndexPage = () => {
  useEffect(() => {
    const amplitudeKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
    if (amplitudeKey != null) {
      console.info('Initialized Amplitude!');
      amplitude.init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!);
    }
  }, []);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleSelectLanguage = (language: any) => {
    setSelectedLanguage(language);
  };
  return (
    <>
      <LanguageDropdown selectedLanguage={selectedLanguage} onSelectLanguage={handleSelectLanguage} />
      <SplashSection selectedLanguage={selectedLanguage} onSelectLanguage={handleSelectLanguage} />
      <IntroSection selectedLanguage={selectedLanguage} onSelectLanguage={handleSelectLanguage} />
      <Gap />
      <TimelineSection selectedLanguage={selectedLanguage} onSelectLanguage={handleSelectLanguage} />
      <Gap />
      <AccountSection selectedLanguage={selectedLanguage} onSelectLanguage={handleSelectLanguage} />
      <Gap />
      <NoticeSection selectedLanguage={selectedLanguage} onSelectLanguage={handleSelectLanguage} />
      <Gap />
      <GallarySection selectedLanguage={selectedLanguage} onSelectLanguage={handleSelectLanguage} />
      <Gap />
      <Footer selectedLanguage={selectedLanguage} onSelectLanguage={handleSelectLanguage} />
    </>
  );
};

export default IndexPage;
