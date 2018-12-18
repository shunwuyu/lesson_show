import React, { Component } from 'react';
// import { loadCollection, db } from '../database';
import Note from './Note'

class Notes extends Component {
  constructor(props) {
    super(props)
    this.getInitialData()
  }

  state = {
    entities: []
  }

  getInitialData () {

  }
  render() {
    const entities = this.state.entities;
    return (
      <div className="ui container notes">
        <h4 className="ui horizontal divider header">
          <i className="paw icon"></i>
          Ninghao Notes App _ React.js
        </h4>
        <button className="ui right floated basic violet button" onClick={this.createEntity}>
        添加笔记
        </button>
        <div className="ui divided item">
        { !entities.length && 
          <span className="ui small disabled header">
          还没有笔记，请按下 '添加笔记' 按钮。
          </span> }
        </div>
      </div>
    )
  }

  createEntity () {
    const entity = {
      body: ''
    }
    this.setState((prevState) => {
      const _entities = prevState.entities
      _entities.unshift(entity)
      return {
        entities: _entities
      }
    })
  }
}

export default Notes