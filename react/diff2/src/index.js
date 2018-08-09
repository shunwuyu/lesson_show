import React from './react'
import ReactDOM from './react-dom'

class Counter extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {
      num: 1
    }
  }

  componentWillUpdate () {
    console.log('will update')
  }

  componentDidMount () {
    console.log('component did mount');
  }

  componentDidUpdate() {
    console.log('did update');
  }

  componentWillMount () {
    console.log('will mount');
  }

  onClick () {
    this.setState({ num: this.state.num + 1 });
  }

  render () {
    return (
      <div>
        <h1>count:{ this.state.num }</h1>
        <button onClick={()=>this.onClick()}>add</button>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    hello
    <span className='rt' onClick="console.log('zz')" style={{fontSize: 20, fontWeight: 'bold'}}>world</span>
    <Counter />
  </div>,
  document.getElementById('root')
);