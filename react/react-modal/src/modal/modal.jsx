import React , { Component } from 'react';
import './modal.css';

class Modal extends Component {
  // constructor(props) {
  //   super(props);  
  // } 
  state = {
    visible: false
  }
  confirm = () => {
    const { confirm } = this.props;
    confirm && confirm()
    this.setState({
      visible: false
    });
  }
  closeModal = () => {
    const { onClose } = this.props
    onClose && onClose()
    this.setState({
      visible: false
    })
  }
  componentDidMount() {
    this.setState({
      visible: this.props.visible
    })
  }
  componentWillReceiveProps(props) {
    this.setState({
      visible: props.visible
    })
  }
  maskClick = () => {
    this.setState({visible: false})
  }
  render () {
    const { visible } = this.state;
    const { title, children } = this.props;
    return visible && (
      // <div className="modal">
      //   这是一个modal组件
      // </div>
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-title">{title}</div>
          <div className="modal-content">{children}</div>
          <div className="modal-operator">
            <button
              className="modal-operator-close"
              onClick={this.closeModal}
            >取消</button>
            <button
             className="modal-operator-confirm"
             onClick={this.confirm}
             >确认</button>
          </div>
        </div>
        <div className="mask"
          onClick={this.maskClick}></div>
      </div>
    );
  }
}
export default Modal;