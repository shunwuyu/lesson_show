export function timeFormat(time) {
  let minute = parseInt(time/60),
  second = parseInt(time) % 60;
  return `${minute / 10 < 1 ? 0 : ''}${minute}:${second/10 < 1 ? 0 : ''}${second}`
}
