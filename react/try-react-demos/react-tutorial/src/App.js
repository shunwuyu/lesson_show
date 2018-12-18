import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    data: [],
    characters: [
      {
        'name': 'Charlie',
        'job': 'Janitor'
      },
      {
          'name': 'Mac',
          'job': 'Bouncer'
      },
      {
          'name': 'Dee',
          'job': 'Aspring actress'
      },
      {
          'name': 'Dennis',
          'job': 'Bartender'
      }
    ]
  }
  componentDidMount () {
    const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result
        })
      })
  }
  render() {
    const characters = this.state.characters;
    const { data } = this.state;
    const result = data.map((entry, index) => {
      return <li  className="list-group-item" key={index}>{entry}</li>;
    });
    return (
      <div className="App container">
        <h1>Hello, React!</h1>
        <ul className="list-group">
          {result}
        </ul>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
          />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
  removeCharacter = index => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => { 
        return i !== index;
      })
    })
  } 
  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
  }
}

export default App;