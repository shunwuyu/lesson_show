import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Login from './components/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <Login />
      </div>
    );
  }
}

export default App;
