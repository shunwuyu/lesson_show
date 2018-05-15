// pages/posts/create.js
import {
  API_CREATE,
  API_DELETE_IMG
} from '../../config/api'

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    entity: {
      title: '',
      content: '', 
      status: 'publish'
    },
    images: [{
      id: 1,
      path: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D72%2C72%2C0/sign=31308be09edda144da5c3ff2d48ae790/3b87e950352ac65c2ddf4980f2f2b21192138a6e.jpg'
    }, {
      id: 2,
      path: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D72%2C72%2C0/sign=c07e328600087bf47db904a994ee601e/a08b87d6277f9e2fdae310c51d30e924b999f32d.jpg'
    }, {
      id: 3,
      path: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D72%2C72%2C0/sign=26002fda9582d158bbd70af1e6372eea/9825bc315c6034a8a9d611b5c2134954092376ca.jpg'
    }, {
      id: 4,
      path: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D72%2C72%2C0/sign=011cd03ea18b87d65017f85f61351f0a/728da9773912b31b0251af268618367adab4e184.jpg'
    }, {
      id: 5,
      path: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D72%2C72%2C0/sign=54b0bf6f7bcf3bc7e8559eacb73d8d93/a71ea8d3fd1f4134a4b3461c2e1f95cad0c85ecf.jpg'
    }],
    progress: []
  },
  onInputTitle (e) {
    this.setData({
      ['entity.title']: e.detail.value
    })
  },
  onInputContent (e) {
    this.setData({
      ['entity.content']: e.detail.value
    })
  },
  onChangeStatus (e) {
    // console.log(e.detail.value)
    this.setData({
      ['entity.status']: e.detail.value?'publish':''
    })
  },
  onTapSubmitButton (e) {
    this.setData({
      isLoading: true
    })
    wx.request({
      url: API_CREATE,
      method: 'POST',
      data: {
        ...this.data.entity
      },
      success: (response) => {
        // console.log(response);
        const url = `$`
        switch(response.data.data.statusCode) {
          case 201:
            this.setData({
              entity: {},
              images: [],
              progress: []
            })
            wx.navigateTo({
              url: `/pages/posts/show?id=${response.data.data.id}`
            })
            break;
          default:
            console.log(response)
        }
      },
      complete: () => {
        this.setData({
          isLoading: false
        })
      }
    })
  },
  onPreviewImage (e) {
    const urls = this.data.images.map((image) => {
      return image.path
    })
    wx.previewImage({
      current: event.currentTarget.dataset.src,
      urls
    })
  },
  onLongpressImage (e) {
    const id = e.currentTarget.dataset.id
    // console.log(id)
    wx.showActionSheet({
      itemList: ['删除图片'],
      success: (response) => {
        switch (response.tapIndex) {
          case 0:
            this.destroyImage(id)
            break;
          default:
            console.log(response)
        }
      }
    })
  },
  destroyImage (id) {
    const url = `${API_DELETE_IMG}/${id}?force=true`;
    wx.request({
      url: API_DELETE_IMG,
      method: 'DELETE',
      success: (response) => {
        const images = this.data.images.filter((image) => {
          return image.id !== id
        });
        this.setData({
          images
        });
      }
    })
  },
  onChooseImage (e) {
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: (response) => {
        const path = response.tempFiles[0].path;
        // console.log(response.tempFiles[0].path)
        const images = [{
          id: Math.ceil(Math.random()*100),
          path: path
        }, ...this.data.images];
        // console.log()
        // console.log(images);
        this.setData({
          images,
          length: images.length
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('load');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log('show');
    wx.navigateTo({
      url: '/pages/users/login'
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})