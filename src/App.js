import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import SignInWithSignUp from './components/SignInWithSignUp';
import Home from './components/Home';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={SignInWithSignUp}/>
        <Route path='/profile' component={Profile}/>
        <Route component={Home}/>
        {/* <Route path='/contact' component={Contact}/> */}
      </Switch>
    );
  }
}

export default App;
