import React from 'react';
import { connect } from "react-redux";
import Style from './index.scss';
import Avatar from '@components/avatar'

@connect(
  store => {
      return {
          userInfo: store.userInfo
      }
  }
)
class PostTopic extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    let {userInfo} = this.props

    let avatarStyle = {
        width: '40px',
        height: '40px'
    }

    console.log('-------------',userInfo);

    return (
      <div className={`${Style['post-topic']}`} >
        <section className="topic-content">
          <header>
            {/* <Avatar userInfo={userInfo} avatarStyle={avatarStyle}/> */}
          </header>
        </section>
      </div>
    )

  }
}

export default PostTopic