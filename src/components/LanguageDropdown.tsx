import React from 'react';
import styled from '@emotion/styled';

const LanguageDropdown = ({ selectedLanguage, onSelectLanguage }: any) => {
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'zh', label: '繁體中文' },
    { code: 'vi', label: 'Tiếng Việt' },
  ];

  return (
    <DropdownContainer>
      <select
        value={selectedLanguage}
        onChange={(e) => onSelectLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;

  select {
    padding: 1px;
    font-size: 16px;
    color: #fff; /* Text color */
    background-color: black; /* Pink background color */
    border-radius: 5px; /* Border radius */
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: grey; /* Darker pink on hover */
    }
  }
`;


export default LanguageDropdown;
