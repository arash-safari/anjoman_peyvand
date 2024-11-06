// src/pages/Home.js
import React from 'react';
import DoubleSegmentation from '../components/DoubleSegmentation';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="App">
      <DoubleSegmentation
        leftColor="#3498db"
        rightColor="#e74c3c"
        height="300px"
        leftContent={
          <div>
            <h1>Welcome to the Persian Orthography Association</h1>
            <p>
              Our mission is to make Persian writing more accessible through Latin orthography.
            </p>
          </div>
        }
        rightContent={
          <video controls>
            <source src="path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        }
      />

      <DoubleSegmentation
        leftColor="#2ecc71"
        rightColor="#9b59b6"
        height="200px"
        leftContent={<p>Left Segment Content for the Second Section</p>}
        rightContent={<p>Right Segment Content for the Second Section</p>}
      />

      {/* Add more DoubleSegmentation components as needed */}
    </div>
  );
};

export default Home;
