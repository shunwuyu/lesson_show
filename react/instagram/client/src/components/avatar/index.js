import React from 'react';
import Style from './index.scss';
import PropTypes from 'prop-types';

class Avatar extends React.Component {
  render () {
    const { userInfo, avatarStyle } = this.props;
    console.log(avatarStyle);
    return (
      <div className={Style['avatar-content']}>
        <div className="avatar" style={{...avatarStyle, 'backgroundImage': `url(${userInfo.avatarUrl})`}}>
          <div className="user_abstract">
            <div className={`username ${userInfo.username&&'clear-bg'}`} style={{...this.props.usernameStyle}}>{userInfo.username}</div>
            <div className={`abstract ${userInfo.username&&'clear-bg'}`} style={{...this.props.abstractStyle, 'display':'none'}}>{userInfo.abstract}</div>
          </div>
        </div>
      </div>
    );
  }
}

Avatar.defaultProps = {
  userInfo: {
    abstract: false
  },
  avatarStyle: {
    width: '32px',
    height: '32px',
  },
  usernameStyle: {
    fontWight: 600,
    fontSize: '14px',
    width: '140px'
  },
  abstractStyle: {
    fontSize: '14px',
    width: 'auto'
  }
}

export default Avatar;