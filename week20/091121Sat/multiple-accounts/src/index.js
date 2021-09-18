import { createStore } from 'redux';

console.log("Starting app for multi-accounts");

const defaultState = {
  checking: 100,
  savings: 100
};

const ACTION_DEPOSIT = 'aD';
const ACTION_WITHDRAW = 'aW';

function createDeposit(account, amount){
  return createBankAction(ACTION_DEPOSIT, account, amount);
}

function createWithdrawal(account, amount){
  return createBankAction(ACTION_WITHDRAW, account, amount);
}

function createBankAction(actionType, account, amount)
{
  return {
    type: actionType,
    payload: {
      account,
      amount
    }
  };
}

function accountReducer(myState=defaultState, anAction){
  console.log("state: " + JSON.stringify(myState));
  console.log("action: " + JSON.stringify(anAction));
  switch(anAction.type){
    case ACTION_DEPOSIT:
      console.log('DEPOSIT');
      return {
        ...myState,
        [anAction.payload.account] : myState[anAction.payload.account] + anAction.payload.amount
      }
    case ACTION_WITHDRAW:
      console.log('WITHDRAW');
      return {
        ...myState,
        [anAction.payload.account] : myState[anAction.payload.account] - anAction.payload.amount
      }
    default:
        return myState;
  }
}

const store = createStore(accountReducer);

store.subscribe(() => {
	console.log('=== state has updated ===');
	const state = store.getState();
	console.log(state);
});

window.store = store;
window.createDeposit = createDeposit;
window.createWithdrawal = createWithdrawal;
