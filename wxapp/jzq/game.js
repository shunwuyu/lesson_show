require('./js/libs/weapp-adapter'); //全局就会有一个canvas对象 window对象
// phaser
window.p2 = require('./js/libs/p2');
window.PIXI = require('./js/libs/pixi');
window.Phaser = require('./js/libs/phaser-split');
// console.log(window);

window.WIDTH = 750;
window.SCALE = WIDTH / canvas.width
window.HEIGHT = canvas.height * SCALE
console.log(window.SCALE, window.HEIGHT)

wx.onShareAppMessage(() => {
  return {
    title: '井字大作战',
    imageUrl: 'images/share.png'
  }
});

// wx.showShareMenu({
//   withSahreTicket: false
// })

window.go = {
  game: null,
  userInfo: null,
  opponentInfo: null,
  common: require('js/common'),
  server: null,
  launchRoomId: null,
  battle: null
}

const config = {
  width: WIDTH,
  height: HEIGHT,
  renderer: Phaser.CANVAS,
  canvas: canvas
}
// console.log(config);
const game = new Phaser.Game(config);
go.game = game;
game.state.add('start', require('./js/states/start'))
game.state.add('menu', require('./js/states/menu'))
game.state.add('practice', require('./js/states/practice'))
game.state.add('rank', require('./js/states/rank'))
// game.state.add('battle', require('./js/states/battle'))
game.state.start('start')
