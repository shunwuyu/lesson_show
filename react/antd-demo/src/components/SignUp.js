import React, { Component } from 'react';
import { Form, Icon, Input, Button, notification } from 'antd';
import Style from './signup.css';
const FormItem = Form.Item;

class SignUp extends Component {
  constructor (props) {
    super(props);
    this.state = {
    }
    this.handleSubmit.bind(this);
  }
  handleSubmit (e) {
    e.preventDefault();
    this.props.toggleSign();
  }
  render () {
    return (
      <section className={Style.signup}>
        <h1 className="header">
          <span className="instagram"></span>
        </h1>
        <h2 className="slogan">注册instagram分享精彩视界</h2>
        <Button type="primary" htmlType="submit" className="facebook-login">
          使用Facebook登陆
        </Button>
        <div className="or-line">
          <span className="line"></span>
          <span className="name">或</span>
          <span className="line"></span>
        </div>
        <Form className="register-form" onSubmit={this.handleSubmit.bind(this)}>
          <FormItem>
            <div className="form-input" >
              <label htmlFor="label-phone">邮箱</label>
              <Input id="label-phone" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} />
            </div>
          </FormItem>
          <FormItem>
            <div className="form-input">
              <label htmlFor="label-username">全名</label>
              <Input id="label-username" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />
            </div>
          </FormItem>
          <FormItem>
            <div className="form-input">
              <label htmlFor="label-lock">密码</label>              
              <Input id="label-lock" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password"/>
            </div>
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="register-form-button">
              注册
            </Button>
          </FormItem>
        </Form>
      </section>
    );
  }
}

export default SignUp;