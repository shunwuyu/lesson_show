import React from 'react';
import Style from './index.scss';
import Avatar from '@components/avatar';
import { connect } from 'react-redux';
import Upload from '@components/upload';
import Carousel from '@components/carousel';
import API from '@common/api';
import {notification} from 'antd';

let ImageUpload = ({uploadImgSuccess, changeUploadStatus}) => {
  return (
    <section className="image-upload">
      <div>
        <span className="icon camera"></span>
        <span>
          <Upload successCb={uploadImgSuccess} className={'placeholder'}>上传照片</Upload>
        </span>
      </div>
      <div>
        <span className="icon network" onClick={() => {changeUploadStatus(1)}}></span>
        <span>从网络添加图片</span>
      </div>
    </section>
  )
}

@connect(
  store => {
    return {
      userInfo: store.userInfo
    }
  }
)
class PostTopic extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      uploadStatus : 0,
      topicDescript: '',
      imageList: []
    }
  }
  render () {
    let {userInfo} = this.props
    
    let avatarStyle = {
      width: '40px',
      height: '40px'
    }
    
    let ImgUpload = () => {
      return (
        <section className="input-url" key={2}>
          <div className="notice">
            <span className="close-circle" onClick={this.closeInpuUrl}></span>
            <i className="icon"></i>
            <span>
              <Upload successCb={this.uploadImgSuccess} className={'placeholder'} />
              添加另一张
            </span>
            </div>
        </section>
      )
    }

    let UploadPlaceholder = () => {
      return (
        <div>
        {
          this.state.uploadStatus === 2? <ImgUpload />: ''
        }
        {
          this.state.uploadStatus === 0 ? 
          <ImageUpload 
            uploadImgSuccess={this.uploadImgSuccess}
            changeUploadStatus={this.changeUploadStatus}
          />
          :''
        }
        </div>
      )
    }

    return (
      <div className={`${Style['post-topic']}`}>
        <section className="topic-content">
          <header>
            <Avatar userInfo={userInfo} avatarStyle={avatarStyle} />
          </header>
          {
            this.state.imageList.length > 0 ?
            (
              <section className="image-list">
                <Carousel imageList={this.state.imageList} /> 
              </section>
            )
            : ""
          }
          <div className="upload-style">
            <UploadPlaceholder  successCb={this.uploadImgSuccess}/>
          </div>
          <div className="descript">
            <textarea cols="50" rows="4" placeholder="愿意的话可以添加说明" value={this.state.topicDescript} onChange={this.handleChangeTextArea}></textarea>
          </div>
          <footer className="footer">
            <span className="close" onClick={() => this.props.togglePostTopic()}>关闭</span>
            <span className="post" onClick={this.postTopic}>发贴</span>
          </footer>
        </section>
      </div>
    )
  }

  uploadImgSuccess = (url) => {
    this.setState({
      imageList: [...this.state.imageList, url],
      uploadStatus: 2
    });

  }

  closeInpuUrl = () => {

  }
  changeUploadStatus = (status) => {

  }

  handleChangeTextArea = (event) => {
    this.setState({
      topicDescript: event.target.value
    })
  }

  postTopic = async () => {
    if (this.state.imageList.length === 0) {
      notification['error']({
        message: "请选择图片"
      });
      return
    }
    let response = await API.addTopic({
      topicImg: this.state.imageList,
      topicTitle: this.state.topicDescript
    });
    notification['success']({
      message: response.message
    })
    this.props.togglePostTopic(true);
  }
}

export default PostTopic;