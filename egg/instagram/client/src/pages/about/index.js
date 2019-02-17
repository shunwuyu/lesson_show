import React from 'react'
import Style from './index.scss'
import Nav from '../../components/nav/index.js'
import UserInfos from './components/userInfos/index.js'
import { connect } from 'react-redux';
@connect(
  store => {
    return {
      personalInfo: store.personalInfo,
      userInfo: store.userInfo
    }
  },
  dispatch => {
    return {

    }
  }
)
class About extends React.Component {
  state = {
    userInfo: {},
    hasFollow: false,
    isSelf: true
  }

  constructor (props) {
    super(props);
  }

  async componentDidMount() {

  }

  render () {
    let { topic, fansCounts, followCounts } = this.props.personalInfo
    return (
      <main>
        <Nav />
        <div className="page-container">
          <div className={Style['personal-about']}>
            <UserInfos 
              isSelf={this.state.isSelf}
              hasFollow={this.state.hasFollow}
              toggleFollowStatus={this.toggleFollowStatus} 
              userInfo={this.state.userInfo}
              personalInfo={
                {
                  topicCounts: topic.counts,
                  fansCounts: fansCounts,
                  followCounts: followCounts
                }
              }
            />
          </div>
        </div>
      </main>
    )
  }
}

export default About;