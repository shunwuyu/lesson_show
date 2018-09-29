import React, { Component } from 'react';
import './App.css';

class MyComponent extends Component {
  handleClick () {
    this.refs.myTextInput.focus();
  }
  render () {
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick.bind(this)} />
      </div>
    )
  }
}

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <MyComponent />
      </div>
    );
  }
}

export default App;
