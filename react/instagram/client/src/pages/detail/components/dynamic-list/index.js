import React from 'react';
import Style from './index.scss';
import {connect} from 'react-redux';
import Avatar from '@components/avatar';
import Carousel from '@components/carousel';
import Comments from '@components/comments';

@connect(
  store => {
    return {
      dynamicList: store.topicList,
      userInfo: store.userInfo
    }
  },
  dispatch => {
    return {

    }
  }
)
class DynamicList extends React.Component {
  render () {
    return (
      <div className={Style['dynamic-list']}>
      {
        this.props.dynamicList.map((item, index) => {
          const imageList = eval(JSON.parse(item.topic.topicImgList));
          // console.log(JSON.parse(imageList));
          // return;
          // console.log(imageList.length);
          return (
            <article className="article" key={index}>
              <header className="header">
                <Avatar userInfo={item.userInfo} />
              </header>
              <div className="container">
                <Carousel imageList={imageList}/>
              </div>
              <div className="comments-content">
                <Comments 
                  topicId={item.topic.topicId}
                  />
              </div>
            </article>
          )
        })
      }
      </div>
    )
  }
}

export default DynamicList;