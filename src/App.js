import './App.css';
import QuoteBox from './components/QuoteBox';
import colorVariations from './data/colorVariations';
import { random } from 'lodash';

export default function App() {
  // const changeThemeColor = colorVariations[Math.floor(Math.random()*colorVariations.length)];
  // let changeThemeColor = random(0, colorVariations.length);
  // const randomColor = random(0, colorVariations.length);
  // const changeThemeColor = colorVariations[randomColor];
  const changeThemeColor = colorVariations[random(0, colorVariations.length)];
  console.log(changeThemeColor.title);




  return (
    <div className="App" style={{ backgroundColor: changeThemeColor.color }}>
      <QuoteBox />
    </div>
  );
}
