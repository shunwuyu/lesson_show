import React, { Component } from 'react';
import './App.css';
class Hello extends Component {
  state = {
    opacity: 1.0
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }, 100);
  }

  render () {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
}

class App extends Component {
  render() {
    const names = ['Alice', 'Emily', 'Kate'];
    return (
      <div className="App">
        <Hello name="world"/>
      </div>
    );
  }
}

export default App;
