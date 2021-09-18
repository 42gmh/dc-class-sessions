import React from "react";
import Output from "./react-widgets/containers/OutputContainer";
import Increment from "./react-widgets/containers/IncrementContainer";
import Decrement from "./react-widgets/containers/DecrementContainer";

const CounterApp = props => (
    <div>
        <h1>The most Amazing Counter App Ever!</h1>
        <Output />
        <Increment />
        <Decrement />
    </div>
);

export default CounterApp;