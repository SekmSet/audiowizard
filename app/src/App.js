import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Account from './components/Account';
import Home from './components/Home';

function App() {
  return (
      <Router>
        <div className="App">
            <Header />
            <Navbar />
            <Main />

          <Switch>
            <Route path='/' exact>
                <Home />
            </Route>

            <Route path='/account'>
                <Account />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
