import React, { useState } from "react";
import "./styles.css";

const Button = ({ handleClick }) => (
  <input type="button" value="Change Square Colour" onClick={handleClick} />
);

const ColouredSquare = ({ colour }) => (
  <div style={{background: colour}} className="coloured-square" />
);

const App = () => {
  const [colour, setColour] = useState("#00ff00");

  const randomRGBValue = () => {
    const randomByte = () => Math.floor(Math.random() * 256);

    const R = randomByte();
    const G = randomByte();
    const B = randomByte();

    return "#" + R.toString(16) + G.toString(16) + B.toString(16);
  };

  return (
    <>
      <ColouredSquare colour={colour} />
      <Button handleClick={() => setColour(randomRGBValue())} />
    </>
  );
};

export default App;