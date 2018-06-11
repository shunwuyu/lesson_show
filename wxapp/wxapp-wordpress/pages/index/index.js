import {
 API_BASE 
} from '../../config/api'
const app = getApp()

Page({
  data: {
    isLoading: true,
    isEarth: false,
    entities: [],
    currentPage: 1,
    totalPages: 0,
    total: 0
  },
  onLoad () {
    wx.request({
      url: API_BASE,
      success: (res) => {
        console.log(res)
        this.setData({
          isLoading: false,
          currentPage: 1,
          total: res.data.data.total,
          isEarth: false,
          totalPages: res.data.data.totalPages,
          entities: res.data.data.articles
        })
      }
    })
  },
  onPullDownRefresh () {
    // console.log('pulldown');
    wx.request({
      url: API_BASE,
      success: (response) => {
        const entities = response.data.data.articles;
        this.setData({
          entities,
          isLoading: false,
          total: response.data.data.total,
          totalPages: response.data.data.totalPages,
          currentPage: 1,
          isEarth: false
        });
        wx.stopPullDownRefresh();
      }
    })
  },
  onReachBottom () {
    let { currentPage, totalPages, isLoading } = this.data
    // console.log(currentPage, totalPages, isLoading)
    if (currentPage >= totalPages || isLoading) {
      return
    }
    this.setData({
      isLoading: true
    });
    currentPage = currentPage + 1
    wx.request({
      url: API_BASE,
      success: (response) => {
        const entities = [...this.data.entities, ...response.data.data.articles];
        // console.log(entities);
        this.setData({
          entities,
          currentPage,
          isLoading: false,
          total: response.data.data.total,
          isEarth: currentPage >= totalPages,
          totalPages: response.data.data.totalPages,
          entities: entities
        })
      }
    })
  }
})
