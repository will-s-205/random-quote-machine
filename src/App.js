import './App.scss';
import QuoteBox from './components/QuoteBox';
import colorVariations from './data/colorVariations';
import { useState } from 'react';

export default function App() {
  const [themeColor, setThemeColor] = useState(colorVariations[0].color);

  const changeThemeColor = () => {
    const randomNum = Math.floor(Math.random() * colorVariations.length);
    let { color } = colorVariations[randomNum];

    setThemeColor(color);
    console.log("App color is " + colorVariations[randomNum].title)
  }

  const style = {
    '--backgound-color': themeColor,
    'color': themeColor
  }

  return (
    <div className="App" style={style}>
      <QuoteBox onNewQuoteClick={changeThemeColor} />
    </div>
  );
}
