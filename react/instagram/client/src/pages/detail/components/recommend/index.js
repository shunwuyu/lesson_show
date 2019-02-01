import React from 'react';
import Style from './index.scss';
import Avatar from '@components/avatar';
import { connect } from 'react-redux';

@connect(store => {
  return {
    userInfo: store.userInfo
  }
})
class Recommend extends React.Component {
  render () {
    const { userInfo, followList } = this.props;
    console.log(userInfo);
    let avatarStyle = {
      width: '50px',
      height: '50px'
    }
    let avatarStyle2 = {
      width: '40px',
      height: '40px'
    }
    return (
      <div className={`${Style.recommend} 'is-attach'`}
      ref="recoomend">
        <header className="header">
          <Avatar userInfo={userInfo} avatarStyle={avatarStyle}/>
        </header>
        <section className="post"
         onClick={() => this.props.togglePostTopic()}>
        发帖
        </section>
        <section className="container">
          <nav className="title">推荐关注</nav>
          {
            followList.length === 0
            ? <p className="notice">暂无推荐</p>
            : <ul className="friend_photo">
              {
                followList.map((item, index) => {
                  return (
                    <li className="list" key={index}>
                      <Avatar userInfo={item} avatarStyle={avatarStyle2} 
                        usernameStyle={{width: '120px', fontSize: '12px'}}
                        abstractStyle={{width: '120px', fontSize: '12px'}}
                        />
                      {
                        item.hasFollow
                        ? <span onClick={() => {this.props.setFollowStatus(index, false)}}>取消关注</span>
                        : <span className="follow" onClick={() => {this.props.setFollowStatus(index, true)}}>关注</span>
                      }
                    </li>
                  )
                })
              }
            </ul>
          }
        </section>
      </div>
    )
  }
}

export default Recommend;