const defaultValue = [
  {
      userInfo: {
          avatar: 'https://s10.mogucdn.com/mlcdn/c45406/180930_634a7ck1ikea6k139lbgbi343ha2c_150x150.jpg',
          username: '',
          abstract: false
      },
      topic: {
          topicImgList: [],
          createdAt: '',
          topicLikeCounts: 0 // 点赞数
      },
      discuss: []
  }
]

const topicList = (state = defaultValue, action) => {
  switch (action.type) {
      default:
          return state
  }
}

export default topicList