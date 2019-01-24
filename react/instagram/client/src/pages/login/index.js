import React from 'react';
import Style from './index.scss';
import SignIn from './components/signIn/index.js'
import SignUp from './components/signUp/index.js'
class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isSignUp: true
    }
  }
  render () {
    return (
      <main className={Style.login}>
        <article className="login_info">
          <section className="descript">
            <div className="photo"></div>
          </section>
          <section className="login_dialog">
            {
              this.state.isSignUp?
              <SignIn />
              :<SignUp toggleSign={this.toggleSign.bind(this)} />
            }
          </section>
        </article>
      </main>
    )
  }
}

export default Login;

