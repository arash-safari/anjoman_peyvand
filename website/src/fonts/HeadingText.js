// HeadingText.js
import React from 'react';

const HeadingText = ({ children, size = '32px', color = '#000', style = {} }) => {
  return (
    <h1
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: size,
        color: color,
        ...style,
      }}
    >
      {children}
    </h1>
  );
};

export default HeadingText;
