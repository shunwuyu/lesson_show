import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      str: "hello",
      name: '没有账号'
    };
    setTimeout(() => {
      this.setState({
        str: "你好"
      });
    }, 5000)
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://api.github.com/users/shunwuyu')
      .then(data => data.json())
      .then(data => {
        this.setState({
          name: data.name
        })
      })
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps);
    console.log(nextState);
    console.log('shouldComponentUpdate');
    // return false;
    // if(nextProps.num === this.props.num) {
    //   console.log('不更新')
    //   return false;
    // }
    
    return true;
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  } 
  componentWillUnmount () {
    console.log('组件即将被卸载');
  }
  render () {
    return (
      <div>
        <div>
          {this.state.name}
        </div>
        <span>
          <h2>{parseInt(this.props.num)}</h2>
          <br/>
          <span>
            <h2>{this.state.str}</h2>
          </span>
        </span>
      </div>
    )
  }
}

class App extends React.Component {
  constructor (props) {
    super(props);
    setTimeout(() => {
      this.setState({
        num: 2, 
      });
      // this.setState({
      //   num: 3
      // });
    }, 1000);

    setTimeout(() => {
      this.setState({
        showLifeCycle: false
      })
    }, 10000);
  }
  state = {
    num: 2,
    showLifeCycle: true
  }
  render () {
    if (!this.state.showLifeCycle) {
      return <div>hahaha</div>;
    }
    return (
      <LifeCycle num = {this.state.num}/>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
