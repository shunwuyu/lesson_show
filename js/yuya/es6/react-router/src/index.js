import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router , Route, Link, withRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const Index = () => (
  <div>首页</div> 
)

// const AuthButton = withRouter(({history}) => (
//   <div>Auth
//     <button onClick={() => {
//       history.push('/login');
//     }}>Sign in</button>
//   </div>
// ))
@withRouter
class AuthButton extends Component {
  render () {
    console.log(this.props);
    const { history } = this.props;
    return (
      <div>Auth
        <button onClick={() => {
          history.push('/login');
        }}>Sign in</button>
      </div>
    )
  }
}

const Login = () => (
  <div>登录</div>
);

ReactDOM.render(
  (
    <Router>
      <div>
        <AuthButton />
        <Route exact path="/" component={Index}></Route>
        <Route path="/login" component={Login}></Route>
      </div>
    </Router>
  )
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
