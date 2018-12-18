import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

const 

const AuthButton = withRouter(
  ({ history }) => 

)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AuthButton />
        </div>
      </Router>
    )
  } 
}

export default App;