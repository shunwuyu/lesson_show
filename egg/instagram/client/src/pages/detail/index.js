import React from 'react';
import Nav from '@components/nav/index.js';
import Style from './index.scss';
import DynamicList from './components/dynamic-list/index.js';
import PostTopic from './components/post-topic';
import { connect } from 'react-redux';

@connect(
  store => {
      return {
          userInfo: store.userInfo
      }
  }
)
class Detail extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        showPostTopic: true
      }
  }

  togglePostTopic = (refresh) => {
    this.setState({
      showPostTopic: !this.state.showPostTopic
    })
    if (refresh) {
      this.initTopicList();
    }
  }
  
  async initTopicList () {

  }

  render () {
    return (
      <main>
        <Nav />
        {
          this.state.showPostTopic?
          <PostTopic togglePostTopic={this.togglePostTopic} />
          : ''
        }
        <div className="page-container">
          <div className={Style['home-detail']}>
            <span className={Style['loading']}></span>
            <DynamicList />
          </div>
        </div>
      </main>
    )
  }
}

export default Detail;