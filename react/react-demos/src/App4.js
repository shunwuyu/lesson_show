import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

const data = '123';
class MyTitle extends Component {
  
  render () {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}

MyTitle.propTypes = {
  title: PropTypes.string
}
class App extends Component {
  render() {
    
    return (
      <div className="App">
       <MyTitle title={data}/>
      </div>
    );
  }
}

export default App;
