import Enemy from "./Enemy";
import IOnTick from "../IOnTick";

class EnemyAI extends egret.EventDispatcher implements IOnTick {
  enemy: Enemy;
  _image: egret.Bitmap;
  initialX: number;
  initialY: number;
  constructor(enemy: Enemy) {
    super();
    this._image = enemy.image;
    this.enemy = enemy;

    this.initialX = this._image.stage.stageWidth / 2;
    this.initialY = -100;
    this.setInitialPosition();
  }

  private setInitialPosition() {
    this._image.x = this.initialX;
    this._image.y = this.initialY;
  }
  onTick () {
    this._image.y += 5;
    if (this._image.y > this._image.stage.stageHeight) {
      this.dispatchEvent(new egret.Event('onEnemyDisappear'));
    }
  }
}

export default EnemyAI