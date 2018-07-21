import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Login.css';
import { connect } from 'react-redux';

const FormItem = Form.Item; 

class Login extends Component {
  github () {
    window.location.href ='https://github.com/login/oauth/authorize?client_id=792cdcd244e98dcd2dee&redirect_uri=http://localhost:3006/&scope=user&state=reactAdmin'
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login-form">
          <div className="login-logo">
            <span>React Admin</span>
          </div>
          <Form onSubmit={this.handleSubmit} style={{maxWidth:'300px'}}>
            <FormItem>
              { getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名!' }]
              })(
                <Input prefix={<Icon type="user" style={{fontSize:13}}/>} placeholder="管理员输入admin, 游客输入guest"/>
              )}
            </FormItem>
            <FormItem>
              { getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }]
              })(
                <Input prefix={<Icon type="lock" style={{fontSize:13}}/>} type="password" placeholder="管理员输入admin, 游客输入guest"/>
              )}
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Checkbox>记住我</Checkbox>
                )
              }
              <a href="#" className="login-form-forgot">忘记密码</a>
              <Button className="login-form-button" type="primary" htmlType="submit" style={{width: '100%'}}>登录</Button>
              <p style={{display: 'flex', justifyContent: 'space-between'}}>
                <a href="">或 现在就去注册！</a>
                <a onClick={this.github}><Icon type="github"/>(第三方登录)</a>
              </p>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

export default Form.create()(Login)