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
      <TimelineSection selectedLanguage={selectedLanguage} onSelectLanguage={handleSelectLanguage} />
      <AccountSection selectedLanguage={selectedLanguage} onSelectLanguage={handleSelectLanguage} />
      <NoticeSection selectedLanguage={selectedLanguage} onSelectLanguage={handleSelectLanguage} />
      <GallarySection selectedLanguage={selectedLanguage} onSelectLanguage={handleSelectLanguage} />
      <Footer selectedLanguage={selectedLanguage} onSelectLanguage={handleSelectLanguage} />
    </>
  );
};

export default IndexPage;
