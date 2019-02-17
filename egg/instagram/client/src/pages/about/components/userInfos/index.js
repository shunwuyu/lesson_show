import React from 'react'
import { Icon } from 'antd'
import Style from './index.scss'
import { withRouter } from 'react-router'

class UserInfos extends React.Component {
  render () {
    let { userInfo } = this.props;
    return (
      <main>
        <div className="user-infos">
          <div className="avator" style={{'backgroundImage': `url(${userInfo.avatarUrl})`}}></div>
          <div className="user-infos">
          {
            this.props.isSelf?
            <p className="operate">
              <span className="user-account">{userInfo.username}</span>
              <span className="modify" onClick={this.goEditAccounts}>编辑个人主页</span>
              <Icon className="icon" type="setting" theme="filled" onClick={this.goEditAccounts} />
            </p>
            :
            <p className="operate">
              <span className="user-account">{userInfo.username}</span>
              <span className="modify">
              {this.props.hasFollow?'已关注':'关注'}
              </span>
            </p>
          }
          </div>
        </div>
      </main>
    )
  }

  goEditAccounts = () => {
    const { history } = this.props;
    history.push('/accounts');
  }
}

export default withRouter(UserInfos);