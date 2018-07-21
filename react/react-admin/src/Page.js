import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Login from './components/pages/Login.jsx';

export default class Page extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/app/dashboard/index" push/> } /> 
          <Route path="/app" component={App} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    )
  }
}
