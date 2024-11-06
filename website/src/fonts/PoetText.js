// PoetText.js
import React from 'react';

const PoetText = ({ children, size = '20px', color = '#333', style = {} }) => {
  return (
    <p
      style={{
        fontFamily: "'Merriweather', serif",
        fontSize: size,
        fontStyle: 'italic',
        color: color,
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export default PoetText;
