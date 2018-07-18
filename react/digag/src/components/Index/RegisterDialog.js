import React, {Component} from 'react';
import {Button, Dialog, Form, Input, Notification} from "element-react";

export default class RegisterDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        email: '',
        password: '',
      },
      loading: false,
    };
  }

}