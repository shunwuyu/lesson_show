import React, { Component } from 'react';
import Turntable from './turntable/turntable';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.canvas = React.createRef()
  }
  componentDidMount() {
    const canvas = this.canvas.current;
    console.log(canvas)
    const context = canvas.getContext('2d')
    canvas.width = 300
    canvas.height = 300
    const turntable = new Turntable({ canvas: canvas, context: context })
    turntable.startRotate()
  }
  render() {
    return <canvas
      ref={this.canvas}
      style={{
        width: '300px',
        height: '300px',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto'
      }}
      >
    </canvas>
  }
}

export default App;
