import './App.css';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Protected from './components/Protected';

import { useState, useEffect } from 'react';

import {BrowserRouter as Router, 
        Route, 
        Switch,
        Link,
        Redirect
      } from 'react-router-dom'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const _toggleIsLoggedIn = () => setIsLoggedIn(!isLoggedIn);

    // componentDidUpdate(), watching a variable
    useEffect(() => {
      console.log("count is now ", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Router>
      <div>
        <button onClick={_toggleIsLoggedIn}>
                    { isLoggedIn ? 'logout' : 'login' }
        </button>
        <br />
        <nav>
          <Link to="/">Home</Link>
          { isLoggedIn && <Link to='/blog'>Blog</Link> }
          <Link to="/about">About</Link>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/blog">
          <Protected li={isLoggedIn}>
            <Blog/>
          </Protected>
        </Route>

        <Route path="/about">
          <About/>
        </Route>

        <Route path="*">
          <Redirect to="/"/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
