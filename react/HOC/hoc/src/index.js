import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UserName from './UserName';
import Mobile from './Mobile';

export default class Memo extends Component {
  render () {
    return (
      <form>
        <UserName />
        <Mobile />
        留言
        <textarea>
        </textarea>
      </form>
    )
  }
}
ReactDOM.render(<Memo />, document.getElementById('root'));