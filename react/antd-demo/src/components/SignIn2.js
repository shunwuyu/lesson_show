import React, { Component } from 'react';
import './signin.css';
import { Form, Icon, Input, Button, notification } from 'antd';
const FormItem = Form.Item;

class SignIn extends Component {
  render () {
    return (
      <section className="signup">
        <h1 className="header">
          <span className="instagram">
          </span>
        </h1>
        <Form className="sigin-form">
          <FormItem>
            <div className="form-input">
              <label htmlFor="label-phone">邮箱</label>
              <Input id="label-phone" prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}/>
            </div>
          </FormItem>
          <FormItem>
            <div className="form-input">
              <label htmlFor="label-lock">密码</label>
              <Input id="label-lock" type="password"  prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}/>
            </div>
          </FormItem>
          <FormItem>
            <Button className="register-form-button" type="primary" htmlType="submit">登陆</Button>
          </FormItem>
        </Form>
      </section>
    )
  }
}

export default SignIn;