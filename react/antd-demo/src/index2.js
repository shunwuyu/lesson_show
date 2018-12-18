import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from './pages/detail/Detail';
import Login from './pages/login/index';
import NotFoundPage from './pages/404/index';
import About from './pages/about/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Detail}/>
      <Route path="/login" component={Login}/>
      {/*<Route path="/about/:userId" component={About} />*/}
      <Route path="/about" component={About} />
      <Route component={NotFoundPage}/>
    </Switch>
  </Router>
  , document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
