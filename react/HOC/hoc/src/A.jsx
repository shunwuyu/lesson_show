import React, { Component } from 'react';
import HOCprogress from './HOCprogress';
class A extends Component {
  render () {
    return <div>这是A组件!</div>
  }
}

export default HOCprogress(A, 56);