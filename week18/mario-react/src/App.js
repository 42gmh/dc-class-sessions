import './App.css';

import marioMap from './mariomap'
import PixelRow from './components/PixelRow';

function App() {

  console.log(".....", marioMap);

  return (
    <div className="App">
      {
        <h1>Mario as a React App</h1>
      }
      {
        <h3>Done via mapping a 2-dimensional array to PixelRow and Pixel React components</h3>
      }
      {
        <br></br>
      }
      { 
        marioMap.map(aPixelRow => <PixelRow rowPixels={aPixelRow} /> ) 
      }
    </div>
  );
}

export default App;
