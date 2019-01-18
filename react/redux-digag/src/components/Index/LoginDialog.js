import React, {Component} from 'react';
import {Form, Icon, Input, Button, Modal, message} from 'element-react';

const FormItem = Form.Item;
const createForm = Form.create;

export default class LoginDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render () {
    return (
      <Modal
        title="登录"
        width="26.5rem"
        visible={ this.props.visible }
        onCancel={ this.props.onClose }
        footer={null}
      >
        <div>fdfdfd</div>
      </Modal>
    )
  }
}