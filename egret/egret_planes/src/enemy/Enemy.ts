import EnemyAI from "./EnemyAI";

export default class Enemy {
  image: egret.Bitmap;
  AI: EnemyAI;
  constructor(image: egret.Bitmap) {
    this.image = image;
    this.AI = new EnemyAI(this)
  }

  removeImage () {
    this.image.parent.removeChild(this.image);
  }
  destroy() {
    this.removeImage();
  }
}