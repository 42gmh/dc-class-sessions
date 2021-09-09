import {useState, useEffect} from 'react';

// eslint-disable-next-line
export default (props) => {
    console.log('render()');    
    const [count, setCount] = useState(0);

    const _increment = () => setCount(count + 1);

    // componentDidUpdate(), watching a variable
    useEffect(() => {
        console.log("count is now ", count);
    }, [count]);

     // componentDidMount()
     useEffect(() => {
        console.log('Runs once.');
    }, []);

    // componentDidUpdate()
    useEffect(() => {
        console.log('Runs after every render');
    });

     // componentWillUnmount()
     useEffect(() => {
        return () => {
            console.log('Runs when the Component is removed');
        }
    }, []);
    
    return (
        <>
            <h1>Lifecycle Hook Demo... {count}</h1>
            <button onClick={_increment}>+</button>
            {/* <h2>App count: {props.appCount} </h2> */}
        </>
    );
}