import { createStore } from "redux";
import { counterReducer } from "./reducers";

const defaultState = {
    count: 999
};

export const store = createStore(counterReducer, defaultState);