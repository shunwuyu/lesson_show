import Modal from './modal/modal';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    visible: false
  }
  showModal = () => {
    this.setState({
      visible: true
    })
  }
  confirm = () => {
    console.log('我是confirm回调');
  }
  closeModal = () => {
    console.log('我是onClose回调')
  }
  render () {
    const { visible } = this.state;
    return (
      <div className="app">
        <button onClick={this.showModal}>Click here</button>
        <Modal 
          visible={visible}
          title="这是自定义的title"
          confirm={this.confirm}
          onClose={this.closeModal}
          >
          这是自定义content
        </Modal>
      </div> 
    )
  }
}

export default App;