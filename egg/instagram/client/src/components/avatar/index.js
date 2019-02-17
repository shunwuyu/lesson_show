import React from 'react'
import Style from './index.scss'
import PropTypes from "prop-types";


class Avatar extends React.Component{
  constructor(props, context){
      super(props, context)
  }

  static contextTypes = {
    router: PropTypes.object
  }

  goAbout = () => {
    let userId = this.props.userInfo.userId;
    try {
        let path = {
            pathname: `/about/${userId}`,
            // params: data
        }
        this.context.router.history.push(path)
    } catch(err) {
        console.log(err)
    }
  }

  render () {
    const {userInfo} = this.props
    return (
      <div className={Style['avatar-content']}>
        <div className="avatar" onClick={this.goAbout}></div>
        <div className="user_abstract">
          <div className={`username ${userInfo.username&&'clear-bg'}`} >{userInfo.username}</div>
          {/* 设置abstract默认为false，可保持背景色 */}
          <div className={`abstract ${userInfo.username&&'clear-bg'}`} >{userInfo.abstract}</div>
        </div>
      </div>
    )
  }

}

Avatar.defaultProps = {
  userInfo: {
      abstract: false,
      avatarUrl: 'https://s11.mogucdn.com/mlcdn/c45406/181105_60bdj928jdhjg9ehhg58hje1212ek_640x640.jpg'
  },
  avatarStyle: {
      'width': '32px',
      'height': '32px'
  },
  usernameStyle: {
      fontWeight: 600,
      fontSize: '14px',
      width: '140px'
  },
  abstractStyle: {
      fontSize: '14px',
      width: 'auto'
  }
}

export default Avatar
