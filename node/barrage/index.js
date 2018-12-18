import CanvasBarrage from './src/canvas_barrage'

let data = [
  {
    value: '周杰伦听妈妈的话，让我反复循环', time: 5, color: 'red', speed: 1, fontSize: 22
  },
  {
    value: '想快快长大，才能保护她', time: 10, color: '#00a1f5', speed: 1, fontSize: 30
  },
  {
    value: '听妈妈的话吧，晚点再恋爱吧！爱呢？',
    time: 15
  }
];

let doc = document;
let canvas = doc.getElementById('canvas');
let video = doc.getElementById('video');
let $txt = doc.getElementById('text');
let $btn = doc.getElementById('btn');
let $color = doc.getElementById('color');
let $range = doc.getElementById('range');
let canvasBarrage = new CanvasBarrage(canvas, video, { data });
console.log(canvasBarrage)
video.addEventListener('play', () => {
  canvasBarrage.isPaused = false;
  canvasBarrage.render();
});
video.addEventListener('pause', () => {
  canvasBarrage.isPaused = true;
});
video.addEventListener('seeked', () => {
  console.log('fdfd');
  canvasBarrage.replay();
});

function send() {
  let value = $txt.value;
  let time = video.currentTime;
  let color = $color.value;
  let fontSize = $range.value;
  let obj = { value, time, color, fontSize };
  canvasBarrage.add(obj);
  $txt.value = '';
}

$btn.addEventListener('click', send);
$txt.addEventListener('keyup', e => {
  let key = e.keyCode;
  key === 13 && send();
})