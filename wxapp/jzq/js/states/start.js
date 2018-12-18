function addStartBtn(cb) {
  const config = {
    type: 'Image',
    image: 'images/btn_start.png',
    style: {
      left: 248 / SCALE,
      top: 870 / SCALE,
      width: 254 / SCALE,
      height: 91 / SCALE
    },
  }
  const startBtn = wx.createUserInfoButton(config)
  startBtn.onTap((res) => {
    if (res.userInfo) {
      cb(res.userInfo)
    }
  })
  return startBtn
}

class Start extends Phaser.State {
  constructor() {
    super();
    // this.handleOnShow = this.handleOnShow.bind(this)
  }
  handleOnShow({ query }) {
    // if (query && query.roomId) {
    //   go.launchRoomId = query.roomId
    // }
  }
  preload() {
    // console.log('preload');
    // 设置缩放
    this.scale.pageAlignHorizontally = true
    this.scale.pageALignVertically = true
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    this.load.image('bg_menu', 'images/bg_menu.png')
    this.load.image('bg_playing', 'images/bg_playing.png')
    this.load.image('bg_rank', 'images/bg_rank.png')
    this.load.image('bg_waiting', 'images/bg_waiting.png')
    this.load.image('avatar', 'images/avatar.png')
    this.load.image('avatar_unknow', 'images/avatar_unknow.png')
    this.load.image('btn', 'images/btn_menu.png')
    this.load.image('o', 'images/o.png')
    this.load.image('x', 'images/x.png')
    this.load.image('row', 'images/rank_row.png')
    this.load.image('avatars', 'images/result_avatars.png')
    this.load.image('win', 'images/result_win.png')
    this.load.image('lose', 'images/result_lose.png')
    this.load.image('draw', 'images/result_draw.png')
    this.load.image('bunting', 'images/bunting.png')
  }
  create() {
    // go.launchRoomId = wx.getLaunchOptionsSync().query.roomId
    // console.log(go.launchRoomId)
    // wx.onShow(this.handleOnShow)
    this.game.add.image(0, 0, 'bg_menu')
    const startBtn = addStartBtn((userInfo) => {
      startBtn.destroy();
      go.userInfo = userInfo
      if (go.userInfo.avatarUrl !== '') {
        this.load.image(go.userInfo.avatarUrl, go.userInfo.avatarUrl)
        this.load.start();
      }
      this.game.state.start('menu')
    })
  }
}
module.exports = Start