import { cloneImage, loadImage} from "./assetUtil";
import Background from "./Background";
import IOnTick from "./IOnTick";
import Enemy from "./enemy/Enemy";
import EnemyAI from "./enemy/EnemyAI";

class Main extends egret.DisplayObjectContainer {
  _IOnTicks: IOnTick[];
  _bitmaps: egret.Bitmap[];
  _hero: egret.Bitmap;
  _enemyTemplate: egret.Bitmap;

  constructor () {
    super();
    this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }
  async onAddToStage () {
    const assets = [
      'assets/background.png',
      'assets/hero.png',
      'assets/enemy.png',
    ];
    this._IOnTicks = [];
    const bitmaps = await loadImage(assets) as egret.Bitmap[];
    this._bitmaps = bitmaps;

    this.createGame();
    egret.startTick(this.onTick, this);
  }

  onTick() {
    this._IOnTicks.forEach(val => val.onTick());
    return false;
  }

  createGame () {
    const [bg, hero, enemy] = this._bitmaps;
    this.addChild(bg);
    const bg2 = cloneImage(bg);
    this.addChild(bg2);
    this.addChild(hero);

    this._hero = hero;
    this._enemyTemplate = enemy;

    this.centerAnchor(hero);
    hero.x = this.stage.stageWidth / 2;
    hero.y = this.stage.stageHeight - 100;

    const background = new Background(bg, bg2);
    this._IOnTicks.push(background);
    setInterval(() => this.addEnemy(), 1000)
  }

  addEnemy () {
    const enemyImage = cloneImage(this._enemyTemplate);
    this.addChild(enemyImage);
    this.centerAnchor(enemyImage);
    const enemy = new Enemy(enemyImage);
    enemy.AI.once('onEnemyDisappear', this.onEnemyDisappear, this)
    this._IOnTicks.push(enemy.AI);
  }

  onEnemyDisappear(e: egret.Event) {
    const AI = e.currentTarget as EnemyAI;
    AI.enemy.destroy();
    this.removeEnemy(AI);
  }

  removeEnemy(enemyAI: EnemyAI) {
    const index = this._IOnTicks.indexOf(enemyAI);
    this._IOnTicks.splice(index, 1);
  }

  centerAnchor(displayObject: egret.DisplayObject) {
    displayObject.anchorOffsetX = displayObject.width / 2;
    displayObject.anchorOffsetY = displayObject.height / 2;
  }
}

window['Main'] = Main;
egret.runEgret();