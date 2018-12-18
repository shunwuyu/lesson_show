function isBigEnough(element) {
  return element >= 15;
}

console.log([12, 5, 8, 130, 44].findIndex(isBigEnough));
