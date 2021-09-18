import './App.css';
import CounterApp from './CounterApp';

import { Provider } from 'react-redux';
import { store } from './redux-widgets/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterApp />
      </div>
    </Provider>
  );
}

export default App;
