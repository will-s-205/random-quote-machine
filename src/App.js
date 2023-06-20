import './App.scss';
import QuoteBox from './components/QuoteBox';
import colorVariations from './data/colorVariations';
import { useState } from 'react';

export default function App() {
  const [themeColor, setThemeColor] = useState('--backgound');

  const changeThemeColor = () => {
    const randomNum = Math.floor(Math.random() * colorVariations.length);
    let { color } = colorVariations[randomNum];

    setThemeColor(color);
    console.log("App color is " + colorVariations[randomNum].title)
  }

  return (
    <div id="App" style={{ background: themeColor, color: themeColor }}>
      <QuoteBox onNewQuoteClick={changeThemeColor} />
    </div>
  );
}
