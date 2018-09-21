- 键盘输入
  ```js
  cursors = game.input.keyboard.createCursorKeys();
  fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)

  if (fireButton.isDown) {
    fireBullet();
  }

  if (cursors.left.isDown)
  {
      player.body.velocity.x = -200;
  }
  else if (cursors.right.isDown)
  {
      player.body.velocity.x = 200;
  }
  ```

  
