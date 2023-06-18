import './App.css';
import QuoteBox from './components/QuoteBox';
import colorVariations from './data/colorVariations';

export default function App() {
  var changeThemeColor = colorVariations[Math.floor(Math.random()*colorVariations.length)];

  return (
    <div className="App" style={{ backgroundColor: changeThemeColor.color }}>
      <QuoteBox />
    </div>
  );
}
