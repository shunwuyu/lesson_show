module.exports = appInfo => {
  return {
    user: {
      userName: 'admin',
      password: 'admin'
    },
    session: {
      maxAge: 3600*1000
    },
    keys: appInfo.name + '_153332185447_3632',
    mongoose: {
      clients: {
        blog: {
          url: 'mongodb://127.0.0.1/blogtest',
          useNewUrlParser: true,
          options: {
          }
        }
      }
    }
  }
}