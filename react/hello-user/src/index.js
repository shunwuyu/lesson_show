import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import PropTypes from 'prop-types';
import * as serviceWorker from './serviceWorker';

// class HelloUser extends React.Component {
//   render () {
//     return (
//       <div>Hello, { this.props.name }</div>
//     )
//   }
// }

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriend: ''
    }
    this.updateNewFriend = this.updateNewFriend.bind(this);
    this.handleAddNew = this.handleAddNew.bind(this);
  }
  updateNewFriend(e) {
    this.setState({
      newFriend: e.target.value
    })
  }
  handleAddNew() {
    this.props.addNew(this.state.newFriend)
    this.setState({
      newFriend: ''
    })
  }

  render () {
    return (
      <div>
        <input type="text"
          value={this.state.newFriend}
          onChange={this.updateNewFriend}
          />
        <button onClick={this.handleAddNew}> Add Friend </button>
      </div>
    )
  }
}

AddFriend.propTypes = {
  addNew: PropTypes.func.isRequired
} 

class ShowList extends React.Component {
  render() {
    return (
      <div>
        <h3>Friends</h3>
        <ul>
          {this.props.names.map((friend, index) => <li key={index}>{friend}</li>)}
        </ul>
      </div>
    )
  }
}

class FriendsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Tyler McGinnis',
      friends: ['Jake Lingwall', 'Sarah Drasner', 'Merrick Christensen']
    }
    this.addFriend = this.addFriend.bind(this);
  }

  addFriend(friend) {
    this.setState((state) => ({
      friends: state.friends.concat([friend])
    }))
  }

  componentWillMount() {
    //将组件装载到DOM后调用
    //适合AJAX 请求
    console.log('willmount')
  }

  componentDidMount() {
    //将组件装载到DOM后调用
    //适合AJAX 请求
    console.log('didmount')
  }

  render () {
    return (
      <div>
        <h3>Name: {this.state.name}</h3>
        <AddFriend addNew={this.addFriend} />
        <ShowList names={this.state.friends} />
      </div>
    )
  }
}

ReactDOM.render(<FriendsContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
