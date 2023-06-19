import './App.css';
import QuoteBox from './components/QuoteBox';
import colorVariations from './data/colorVariations';

// const setColor = () => {
//   const randomColor = Math.floor(Math.random() * colorVariations.length);
//   console.log(colorVariations[randomColor].title)
//   // return document.getElementById("App").style.backgroundColor = colorVariations[randomColor].color
//   return
// }

var changeThemeColor = colorVariations[Math.floor(Math.random()*colorVariations.length)];


export default function App() {
  return (
    <div id="App" style={{ backgroundColor: changeThemeColor.color }}>
      <QuoteBox />
    </div>
  );
}
