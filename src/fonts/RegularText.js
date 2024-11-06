// RegularText.js
import React from 'react';

const RegularText = ({ children, size = '16px', color = '#666', style = {} }) => {
  return (
    <p
      style={{
        fontFamily: "'Roboto', sans-serif",
        fontSize: size,
        color: color,
        ...style,
      }}
    >
      {children}
    </p>
  );
};

export default RegularText;
