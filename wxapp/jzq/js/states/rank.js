function backToMenu() {
  go.game.state.start('menu');
}
class Rank extends Phaser.State {
  create() {
    const openDataContext = wx.getOpenDataContext()
    console.log(openDataContext);
    this.add.image(0, 0, 'bg_rank');
    const backButton = this.add.button(0, 155, 'btn', backToMenu)
    backButton.alpha = 0
    openDataContext.postMessage('rank');
  }

  render () {
    const openDataContext = wx.getOpenDataContext()
    const sharedCanvas = openDataContext.canvas
    // console.log(sharedCanvas);
    this.game.context.drawImage(sharedCanvas, 0, 0)

  }
}

module.exports = Rank