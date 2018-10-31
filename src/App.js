import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import LogInWithSignUp from './components/LogInWithSignUp';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={LogInWithSignUp}/>
        <Route component={Home}/>
        {/* <Route path='/contact' component={Contact}/> */}
      </Switch>
    );
  }
}

export default App;
