import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';

function AuthExample () {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </Router>
  )
}

function Public () {
  return <h3>Public</h3>;
}

function Protected () {
  return <h3>Protected</h3>;
}

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      })
    })
  }
  render () {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;
    
    if ( redirectToReferrer ) return <Redirect to={from} />
    
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
}
// withRouter可以包装任何自定义组件，将react-router 的 history,location,match 三个对象传入
const AuthButton = withRouter(
  ({ history }) => 
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(()=> history.push("/"));
          }}>
          Sign out
        </button>
      </p>
    ): (
      <p>You are not logged in.</p>
    )
)

function PrivateRoute({ component: Component, ...rest}) {
  // console.log(props);
  // console.log(rest);
  return (
    <Route 
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ): ( 
          <Redirect 
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}> 
          </Redirect>
        )
      }
    />
  )
}

ReactDOM.render(<AuthExample />, document.getElementById('root'));