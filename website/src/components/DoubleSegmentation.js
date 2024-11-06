// src/components/DoubleSegmentation.js
import React from 'react';
import '../styles/DoubleSegmentation.css';

const DoubleSegmentation = ({ leftColor, rightColor, height, leftContent, rightContent }) => {
  return (
    <div className="double-segmentation" style={{ height }}>
      <div
        className="left-part"
        style={{ backgroundColor: leftColor }}
      >
        {leftContent}
      </div>
      <div
        className="right-part"
        style={{ backgroundColor: rightColor }}
      >
        {rightContent}
      </div>
    </div>
  );
};

export default DoubleSegmentation;
