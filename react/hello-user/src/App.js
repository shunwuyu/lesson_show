import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: 'tylermcginnis'
    }
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <div>
        Hello {this.state.username} <br/>
        Change Names:
        <input 
          type="text"
          value={this.state.username}
          onChange={e => this.handleChange(e)} />
      </div>
    )
  }
}

export default App;
