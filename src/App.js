import ColorBox from "./ColorBox";
import Buttons from "./Buttons";
import { useState, useEffect } from 'react';

function App() {
  const [firstColor, setFirstColor] = useState('');
  const [secondColor, setSecondColor] = useState('');
  const [thirdColor, setThirdColor] = useState('');
  const [correct, setCorrect] = useState('');
  const [colorBox, setColorBox] = useState('');
  const [outcome, setOutcome] = useState('');

  useEffect(() => {
    const hexColorArr = [randomColor(), randomColor(), randomColor()];
    setFirstColor(hexColorArr[0]);
    setSecondColor(hexColorArr[1]);
    setThirdColor(hexColorArr[2]);
    setColorBox(hexColorArr[Math.floor(Math.random() * 3)]);
  }, [correct]);

  console.log(colorBox)

  const randomColor = () => {
    let colorValue = '#';
    for (let i = 0; i < 6; i++) {
      const alpha = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      const randomNum = Math.floor(Math.random() * 15);
      const randomAlpha = alpha[randomNum];
      colorValue += randomAlpha;
    }
    return colorValue;
  }

  randomColor();
  return (
    <div className="App">
      <main className="color-app">
        <ColorBox
          colorBox={colorBox}
        />
        <Buttons
          firstColor={firstColor}
          secondColor={secondColor}
          thirdColor={thirdColor}
          correct={correct}
          setCorrect={setCorrect}
          colorBox={colorBox}
          setOutcome={setOutcome}
        />
        {outcome === true ? <p style={{ color: "green" }}>Correct!</p> : outcome === false ? <p style={{ color: "red" }}>Wrong Answer!</p> : null}
      </main>
    </div>
  );
}

export default App;
