import React from 'react';
import Style from './index.scss';
import { notification } from 'antd';
import API from '@common/api.js';
import PropTypes from "prop-types";
import * as qiniu from 'qiniu-js';

class Upload extends React.Component {
  uploadFn = async () => {
    let response = await API.getToken();
    let { baseUrl, token } = response.data;
    let files = this.refs.upload.files
    // console.log(files);
    // 是否是一张照片？
    // 七牛
    if (!this.imageVerify()) return; 
    let putExtra = {
      fname: "",
      params: {},
      mimeType: ["image/png", "image/jpeg", "image/gif"]
    };
    let config = {
      region: qiniu.region.z0
    };

    let key = new Date().getTime() + files[0].name;
    let observable = qiniu.upload(files[0], key, token, putExtra, config)
    let observer = {
      complete: (res) => {
        let imgUrl = baseUrl + '/' + res.key
        console.log(imgUrl);
        this.props.successCb(imgUrl);
      },
      error: (err) => {
        notification.error({
          message: err
        })
      }
    }
    let subscrtion = observable.subscribe(observer);
  }

  imageVerify = () => {
    let files = this.refs.upload.files
    let fileType = files[0].type;
    console.log(fileType);
    if (/^image/.test(fileType)) {
      return true
    } else {
      console.log('error-------');
      notification.error({
        message: "请选择图片类型文件"
      })
      return false
    }

  }

  render () {
    return (
      <input 
        ref="upload"
        className={Style['upload-image']}
        type="file"
        accept="image/*"
        onChange={this.uploadFn}
      />
    )
  }
}


Upload.defaultProps = {
  successCb: () => {}
}
export default Upload
