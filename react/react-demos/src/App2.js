import React, { Component } from 'react';
import './App.css';

class HelloMessage extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return <h1>Hello {this.props.name}</h1>
  }
}

class App extends Component {
  render() {
    const arr = [
      <h1 key="1">Hello World!</h1>,
      <h2 key="2">React is awesome</h2>
    ];
    return (
      <div className="App">
        <HelloMessage name="John"/>
        {
          arr
        }
      </div>
    );
  }
}

export default App;
