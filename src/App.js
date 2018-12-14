import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/signup' component={SignUp}/>
        <Route path='/login' component={SignIn}/>
        <Route path='/profile' component={Profile}/>
        <Route component={Home}/>
        {/* <Route path='/contact' component={Contact}/> */}
      </Switch>
    );
  }
}

export default App;
