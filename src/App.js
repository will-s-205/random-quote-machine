import './App.css';
import QuoteBox from './components/QuoteBox';
import colorVariations from './data/colorVariations';
import { random } from 'lodash';

export default function App() {
  return (
    <div id="App">
      <QuoteBox />
    </div>
  );
}
