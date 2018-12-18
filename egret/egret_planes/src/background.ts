import IOnTick from './IOnTick';
export default class Background implements IOnTick {
  _bg: egret.Bitmap;
  _bg2: egret.Bitmap;
  constructor(bg: egret.Bitmap, bg2: egret.Bitmap) {
    this._bg = bg;
    this._bg2 = bg2;
    this._bg2.y = -bg2.height;
  }
  onTick () {
    const SPEED = 8;
    this._bg.y += SPEED;
    this._bg2.y += SPEED;
    const height = this._bg.height;
    if (this._bg.y > height) {
      this._bg.y = this._bg2.y - height;
    }
    if (this._bg2.y > height) {
      this._bg2.y = this._bg.y - height;
    }
  }
}