import React, { Component } from 'react';
import './App.css';

class LikeButton extends Component {
  state = {
    liked: false
  }
  handleClick () {
    this.setState({
      liked: !this.state.liked
    })
  }
  render () {
    var text = this.state.liked? 'like': 'haven\'t liked'
    return (
      <p onClick={this.handleClick.bind(this)}>
        You {text} this. Click to toggle.
      </p>
    )
  }
}

class App extends Component {
  render() {
    const names = ['Alice', 'Emily', 'Kate'];
    return (
      <div className="App">
        <LikeButton />
      </div>
    );
  }
}

export default App;
