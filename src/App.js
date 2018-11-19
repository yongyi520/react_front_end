import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.sass';

import Dashboard from './layouts/Dashboard/Dashboard'
import Companies from './layouts/Companies/Companies'



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Companies}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/companies" component={Companies}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
