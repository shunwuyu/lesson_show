function practice() {
  go.game.state.start('practice')
}

function battle() {
  if (!go.server.socket.connected) return 
  go.game.state.start('battle')
}

function rank() {
  go.game.state.start('rank')
}

function addMenu () {
  [
    [ 248, 750, "单机练习", practice ],
    [ 248, 900, "好友约战", battle ],
    [ 248, 1050, "好友排行", rank ] 
  ].map((btnConfig) => {
    go.common.addBtn({
      x: btnConfig[0],
      y: btnConfig[1],
      text: btnConfig[2],
      callback: btnConfig[3]
    })
  })
}

class Menu extends Phaser.State {
  create () {
    this.add.image(0, 0, 'bg_menu')
    addMenu()
  }
}

module.exports = Menu