import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Student from './student/Student'
import Navigation from './components/Navigation'
import history from './History'


class App extends Component{
  render(){
    return(
      <div>
        <BrowserRouter history={history}>
          <Navigation/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/student/:studentname/:studentno" component={Student}/>
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      </div>

    );
  }
}

const NewRoute = () => {
  return (
    <div>
      <p>New Route</p>
    </div>
  );
}



export default App;
