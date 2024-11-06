// src/pages/Home.js
import React from 'react';
import DoubleSegmentation from '../components/DoubleSegmentation';
import '../styles/Home.css';
import PoetText from '../fonts/PoetText';
import HeadingText from '../fonts/HeadingText';
const Home = () => {
  return (
    <div className="App">
      <DoubleSegmentation
        leftColor="#3498db"
        rightColor="#e74c3c"
        height="300px"
        leftContent={
          <div>
            <h1><HeadingText>Be anjomane peyvand ḣoš ämadid</HeadingText></h1>
            <p>
            <HeadingText>Mamoriyate ma asän ijäde ḣatolrasme jadid baräye färsi ast ta yäd giriye än baräye hameye mardomän jahän va kodakän asän tar šavad.</HeadingText>
            </p>
          </div>
        }
        rightContent={
          <video controls>
            <source src="path-to-your-video.mp4" type="video/mp4" />
            
          </video>
        }
      />

      <DoubleSegmentation
        leftColor="#2ecc71"
        rightColor="#9b59b6"
        height="200px"
        leftContent={<p><HeadingText>Cera niyaz be taqire ḣatolrasme arabi ast?</HeadingText></p>}
        rightContent={<div><p><HeadingText>Alefbäye peyvand</HeadingText> </p>
        <p><PoetText>Alä yä ayohal säqi ader ka'san va nävelha, ke ešq äsän nemod aval vali oftäd moškelha</PoetText></p>
        </div>}
      />
      <DoubleSegmentation
        leftColor="#2ecc71"
        rightColor="#9b59b6"
        height="200px"
        leftContent={<p><HeadingText>Keyboarde Peyvand</HeadingText></p>}
        rightContent={<div><p><HeadingText>Morurgarhä</HeadingText> </p></div>}
      />
      <DoubleSegmentation
        leftColor="#2ecc71"
        rightColor="#9b59b6"
        height="200px"
        leftContent={<p><HeadingText>Forušgäh</HeadingText></p>}
        rightContent={<div><p><HeadingText>Hamkäri&Hamrähi</HeadingText> </p></div>}
      />
      <DoubleSegmentation
        leftColor="#2ecc71"
        rightColor="#9b59b6"
        height="200px"
        leftContent={<p><HeadingText>Darbäreye ma</HeadingText></p>}
        rightContent={<div><p><HeadingText>Tamäs ba ma</HeadingText> </p></div>}
      />
      {/* Add more DoubleSegmentation components as needed */}
    </div>
  );
};

export default Home;
