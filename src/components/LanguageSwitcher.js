// src/components/LanguageSwitcher.js
import React, { useState } from 'react';
import { convertToLatin, convertToPersian } from '../utils/transliteration';

const LanguageSwitcher = ({ text }) => {
  const [isLatin, setIsLatin] = useState(false);

  const toggleLanguage = () => setIsLatin(!isLatin);

  return (
    <div>
      <p>{isLatin ? convertToLatin(text) : convertToPersian(text)}</p>
      <button onClick={toggleLanguage}>
        Switch to {isLatin ? 'Persian' : 'Latin'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
