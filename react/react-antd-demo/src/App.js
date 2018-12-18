import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import DocumentType from './DocumentType';

class App extends Component {
  state = {
    tags : ['草稿', '关于', '常见问题'],
    selectedTags: []
  }
  render() {
    return (
      <div className="App">
        <Sidebar />
        <DocumentType 
        selectedTags = {this.state.selectedTags}
        tags= {this.state.tags}
        addTag={this.addTag}
        onChange={this.onChange}
        activeColor="#123"/>
      </div>
    );
  }
  addTag = (tag) => {
    const tags = this.state.tags;
    this.setState({
      tags: [...tags, tag]
    })
  }
  onChange = (tag) => {
    const tags = this.state.selectedTags;
    if (tags.indexOf(tag) == -1) {
      this.setState({
        selectedTags: [...tags, tag]
      })
    }
  }

  removeTag = (tag) => {
    // const tags = this.state.selectedTags;
    console.log(tag);
  }
}

export default App;
