import React, { Component } from 'react';
import './login.css';
import SignIn from './SignIn2';
import SignUp from './SignUp';
import Footer from './Footer';
class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isSignUp: true
    }
  }
  render () {
    return (
      <main className="login">
        <article className="login_info">
          <section className="descript">
            <div className="photo"></div>
          </section>
          <section className="login_dialog">
            {
              this.state.isSignUp?<SignIn />:<SignUp toggleSign={this.toggleSign.bind(this)}/>
            }
            <div className="toggle_ways">
              {
                this.state.isSignUp
                ? <span>没有账号？<a className="notice" onClick={this.toggleSign.bind(this)}>注册</a></span>
                : <span>有账号了？<a className="notice" onClick={this.toggleSign.bind(this)}>请登录</a></span>
              }
            </div>
          </section>
        </article>
        <Footer />
      </main>
    )
  }

  toggleSign = () => {
    this.setState({
      isSignUp: !this.state.isSignUp
    })
  }
}

export default Login;