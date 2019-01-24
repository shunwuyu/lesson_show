import React from 'react';
import { Form, Icon, Input, Button, notification } from 'antd';
import Style from './index.scss';
import API from '@common/api.js';
import { withRouter } from 'react-router';
import { throws } from 'assert';

const FormItem  = Form.Item;

class LoginForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  } 
  render () {
    const { getFieldDecorator } = this.props.form;
    return(
      <section className={Style.signup}>
        <h1 className="header">
          <span className="instagram">
          </span>
        </h1>
        <Form className="sign-form" onSubmit={this.handleSubmit.bind(this)}>
          <FormItem>
            {
              getFieldDecorator('email', {
                rules: [{required: true, message: '请输入您的邮箱'}]
              })(
                <div className={`form-input ${this.state.emailEmpty && 'active'}`} onChange={this.onChangeHandler.bind(this, 'email')}>
                  <label htmlFor="label-phone">邮箱</label>
                  <Input id="label-phone" type="email" prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>} />
                </div>
              )
            }
          </FormItem>
          <FormItem>
            {
              getFieldDecorator('password', {
                rules: [{
                  required: true, message: '请输入您的密码!'
                }]
              })(
                <div className={`form-input ${this.state.passwordEmpty && 'active'}`} onChange={this.onChangeHandler.bind(this, 'password')}>
                  <label htmlFor="label-lock">密码</label>
                  <Input id="label-lock" type="password" prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} />
                </div>
              )
            }
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="register-form-button">登录</Button>
          </FormItem>
        </Form>
      </section>
    )
  }

  onChangeHandler (type, event) {
    this.setState({
      [type+'Empty']: event.target.value !== ''
    })
  }
  handleSubmit (e) {
    e.preventDefault();
    this.props.form.validateFields(async(err, values) => {
      if (!err) {
        let response = await API.login(values)
        // console.log(response);
        notification['success']({
          message: '登录成功'
        })
        const { history } = this.props;
        setTimeout(() => {
          history.push('/');
        }, 500);
      } 
    })
  }
}

const WrappedLoginForm = Form.create()(LoginForm);

export default withRouter(WrappedLoginForm);