import React, { Component } from 'react';
import Head from './component/Head/Head';
import Body from './component/Body/Body';
import PropTypes from 'prop-types';
import { createStore, storeChange } from './redux';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Body />
      </div>
    );
  }
}