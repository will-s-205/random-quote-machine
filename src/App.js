import './App.scss';
import QuoteBox from './components/QuoteBox';
import colorVariations from './data/colorVariations';
import { useState } from 'react';

export default function App() {
  const [themeColor, setThemeColor] = useState('--backgound');

  // const style = {
  //   // '--backgound': themeColor
  //   '--backgound': "#000"
  // };

  const changeThemeColor = () => {
    const randomNum = Math.floor(Math.random() * colorVariations.length);
    const { color } = colorVariations[randomNum];

    setThemeColor(color);
    console.log("App color is "+colorVariations[randomNum].title)
  }

  return (
    // <div id="App" style={{background:"#000"}}> // WORKS
    // <div id="App" style={{background:themeColor}} onClick={changeThemeColor}>
    <div id="App" style={{background:themeColor}}>
      {/* <QuoteBox /> */}
      <QuoteBox handleNewQuoteButtonClick={changeThemeColor}/>
    </div>
  );
}
