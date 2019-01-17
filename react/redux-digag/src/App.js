import React, { Component } from 'react';
import Header from "./components/Index/Header";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import { registerAction } from './redux/action/users';
import './App.css';

class App extends Component {

  render(){
    return(
      <div className="App">
        <div className="App-header">
          <Header registerActions={this.props.registerActions} users={this.props.users}/>
        </div>
        <div className="App-body">
          <div className="welcome-view">
            <div className="category-nav">
              <div>1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd</div>
            </div>
            <div className="main">
              21adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
            <div className="sidebar">
              31adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      users: state.users
    }
  },
  (dispatch) => {
    return {
      registerActions: bindActionCreators(registerAction, dispatch)
    }
  }
)(App);