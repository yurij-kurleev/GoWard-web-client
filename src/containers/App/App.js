import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from 'containers/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/*Place for header*/}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
          {/*Place for footer*/}
        </div>
      </Router>
    </div>
  );
}

export default App;
