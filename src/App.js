import React, { useState } from 'react';
import useGenerateRandomColor from './useGenerateRandomColor';

const ColorGenerator = () => {
  // State to store the generated color
  const [currentColor, setCurrentColor] = useState('#FFFFFF'); // Default to white

  // Function to generate a random color
  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setCurrentColor(randomColor);
  };

  return (
    <div>
      <button onClick={generateRandomColor}>Generate</button>
      <div
        style={{
          backgroundColor: currentColor,
          padding: '20px',
          marginTop: '20px',
          borderRadius: '5px',
        }}
      >
        Generated Color: {currentColor}
      </div>
    </div>
  );
};

export default ColorGenerator;
