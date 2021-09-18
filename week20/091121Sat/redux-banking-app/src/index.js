
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { Balance } from './components/Balance';

console.log("Starting the banking app");

const defaultState = {
  balance: 0
};

const actionIncrement = {
  type: 'increment'
};

const actionDecrement = {
  type: 'decrement'
};

function account(myState=defaultState, anAction)
{
  console.log("State" + JSON.stringify(myState));
  console.log("Action" + JSON.stringify(anAction));
  switch(anAction.type)
  {
    case 'increment':
      console.log("INCREMENTING");
      return {
        balance: myState.balance + 1
      };
    case 'decrement':
      console.log("DECREMENTING");
      return {
        balance : myState.balance - 1
      };
    default:
      console.log('DEFAULT');
      return myState;
  }
}

const store = createStore(account);
store.subscribe(() => {
  console.log("=== State has changed ===");
  const myState = store.getState();
  console.log(myState);
});

ReactDOM.render(
    <Provider store={store}>
      <Balance/>
      <button onClick={() => {store.dispatch(actionIncrement)}}>Increment</button>
      <button onClick={() => {store.dispatch(actionDecrement)}}>Decrement</button>
    </Provider>,
  document.getElementById('root')
);


