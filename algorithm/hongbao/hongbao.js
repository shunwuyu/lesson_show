class RandomSplit {
  constructor(num) {
    // 实际总数 
    this.num = this.getNum(num);
    try {
      // multiple 小数位数
      //取小数位 toString 按.切割 
      this.multiple = this.num.toString().split('.')[1].length;
    } catch(e) {
      this.multiple = 0;
    }
    // console.log(this.num);
    // 变大了的 次方运算
    this.calcNum = this.num * Math.pow(10, this.multiple);
    // console.log(this.calcNum);
    // console.log(this.calcNum);
  }
  isNumber(num) {
    
    // console.log(num);
    // .1010 规则数字
    let number = +num;
    // NaN
    // console.log(typeof number);
    // console.log(number);
    // console.log(number);
    if ((number - number) !== 0) {
      return false;
    }
    // console.log(number , num);
    if (number === num) {
      return true;
    }
    console.log(typeof num);
    if (typeof num === 'string') {
      if(number === 0 && num.trim() === '') {
        return false
      }
      return true
    }
    return false
  }
  getNum(num, defaultNum=0) {
    // console.log(this.isNumber(num));
    // check es6, 默认参数
    return this.isNumber(num) ? (+num) : defaultNum;
  }
  // 平分 n 人数 precision 精度
  average(n, precision, isInt) {
    precision = Math.floor(this.getNum(precision, 0));
    // console.log(prec ision);
    // console.log(precision)
    n = Math.floor(this.getNum(n));
    // console.log(n);
    let calcNum = this.calcNum * Math.pow(10, precision < 0 ? 0 : precision);
    // console.log(calcNum);
    // console.log(calcNum);
    // 不够分
    if (n > calcNum) {
      return [];
    } else {
      let index = 0;
      // 平均数
      let avg = Math.floor(calcNum / n);
      // console.log(avg);
      let rest = calcNum % n;
      // console.log(rest)
      // 剩余数真充间隔
      let gap = Math.round((n - rest) / rest) + 1;
      // console.log(gap);
      // console.log(Math.round((n - rest) / rest));
      let result = Array(n).fill(avg);
      // console.log(result);
      while (rest > 0) {
        index = (--rest) * gap;
        result[index>=n?(n-1):index]++;
      }
      // console.log(result);
      if (isInt) {
        return result;
      }
      return result.map((item) => {
        return (item / Math.pow(10, this.multiple + precision))
      });
    }
  }

  split(n, precision) {
    n = Math.floor(this.getNum(n));
    // console.log(n);
    precision = Math.floor(this.getNum(precision, 0));
    let arr = this.average(n, precision, true);
    
    let arrResult = arr.concat();
    // console.log(arrResult);
    for (let i = 0; i < arr.length; i++) {
      // console.log(arr[i]);
      let num = Math.floor(Math.random() * arr[i]);
      // console.log(num);
      let numLeft = Math.floor(Math.random() * num);
      // console.log(numLeft);
      let numRight = num - numLeft;
      // console.log(numRight);
      let iLeft = i === 0 ? (arr.length - 1) : (i-1);
      let iRight = i === (arr.length - 1) ? 0 : (i+1);
      arrResult[i] -= num;
      arrResult[iLeft] += numLeft;
      arrResult[iRight] += numRight;
    }
    return arrResult.map((item) => {
      return (item / Math.pow(10, this.multiple + precision));
    })
  }
}

// const hongbao = new RandomSplit("dd");
// const hongbao = new RandomSplit("dd0.121212");
// const hongbao = new RandomSplit(-.121210);
const hongbao = new RandomSplit(12.232);
// const hongbao = new RandomSplit(200);
hongbao.split(7, 2);