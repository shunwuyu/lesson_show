import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionTypes from "./redux/actionTypes";
import { doLogin } from "./redux/actions";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          {JSON.stringify(this.props.userInfo)}
          <button type="button" onClick={this.props.login}>登录</button>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  userInfo: state.userInfo
}), (dispatch) => ({
  login: () => {
    // dispatch({type: ActionTypes.LOGIN});
    dispatch(doLogin({username: 'xxx', password: '123123'}));
  }
}))(App);
