import './App.css';

import Greeter from './components/Greeter';
import Greeter2 from './components/Greeter2';

const spiceGirls = [
  "Melanie",
  "Emma",
  "Mel B",
  "Geri",
  "Victoria"
];

function App() {
  return (
    <div className="App">
      <h1 className="first_greeting">Hi Spice Girls from the App Component!</h1>
      {
        spiceGirls.map( spiceGirl => <Greeter who={spiceGirl} />)
      }
      {
        listTheSpiceGirls(spiceGirls)
      }
    </div>
  );
}

function listTheSpiceGirls(aSpiceList)
{
  const greeters = [];
  
  aSpiceList.forEach(element => {
    greeters.push(<Greeter2 who={element} />)
  });

  return greeters;
}

export default App;