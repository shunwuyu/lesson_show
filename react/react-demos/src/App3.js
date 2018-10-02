import React, { Component } from 'react';
import './App.css';

class NoteList extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    // console.log(this.props.children);
    return (
      <ol>
        {
          this.props.children.map(child => <li>{child}</li>)
        }
      </ol>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <NoteList>
          <span>hello</span>
          <span>world</span>
        </NoteList>
      </div>
    );
  }
}

export default App;
