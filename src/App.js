
import React from 'react';
import './App.scss';

import Navbar from './Component/Navbar/Navbar'; // Create a Navbar component
import ImageSlider from './Component/ImageSlider/ImageSlider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="image-slider-container">
        <ImageSlider />
      </div>
    </div>
  );
}

export default App;
