import React, { Component } from 'react';
import { connect } from '../../redux';
class Button extends Component {

  changeContext(type) {
    const { dispatch } = this.props;
    const key = type === 'HEAD'?'head':'body';
    dispatch({
      type: type,
      [key]: '我是修改后的数据'
    });
  }

  render() {
    
    return (
      <div className="button">
        <div className="btn" onClick={() => this.changeContext('HEAD')}>{this.props.headBtn}</div>
        <div className="btn" onClick={() => this.changeContext('BODY')}>{this.props.bodyBtn}</div>
      </div>
    );
  }
}

export default connect(Button)