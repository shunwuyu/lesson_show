import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const names = ['Alice', 'Emily', 'Kate'];
    return (
      <div className="App">
        {
          names.map((name, index) => {
            return <div key={index}>Hello, {name}</div>
          })
        }
      </div>
    );
  }
}

export default App;
