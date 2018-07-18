import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './src/styles/index.scss';
import logo from './src/assets/logo.svg';
import PropTypes from 'prop-types';

const propTypes = {
  message: PropTypes.string.isRequired,
  getMessage: PropTypes.func.isRequired,
};

class Home extends Component {
  render() {
    const { message } = this.props;
    return (
      <div className="home">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to React
          </h1>
        </header>
        <p className="App-intro">
          To get started, edit
          <code className="App-code">
            src/views/home/index.js
          </code>
          and save to reload.
        </p>
        <p className="App-intro">
          {message}
        </p>
      </div>
      
    )
  }
}

ReactDOM.render(<Home message="来了哈"/>, document.getElementById('app'));
