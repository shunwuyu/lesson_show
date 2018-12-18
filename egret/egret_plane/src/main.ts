import { loadImage } from "./assetUtil";

class Main extends egret.DisplayObjectContainer {
  constructor () {
    super();
    // console.log('aaa');
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }

  onAddToStage () {
    this.createGame();
  }

  async createGame() {
    const assets = [
      'assets/background.png',
      'assets/hero.png',
      'assets/enemy.png'
    ];
    const bitmaps = await loadImage(assets) as egret.Bitmap[];
    const [bg, hero, enemy] = bitmaps;
    this.addChild(bg);
    this.addChild(hero);
    this.addChild(enemy);

    this.centerAnchor(hero);
    this.centerAnchor(enemy);

    enemy.x = this.stage.stageWidth / 2;
    enemy.y = 200;

    hero.x = this.stage.stageWidth / 2;
    hero.y = this.stage.stageHeight - 100;
  }

  centerAnchor(displayObject: egret.DisplayObject) {
    displayObject.anchorOffsetX = displayObject.width / 2;
    displayObject.anchorOffsetY = displayObject.height / 2;
  }
}

window['Main'] = Main;
egret.runEgret();