const generateArray = require('./generate.js'); 

function selectSort(arr){
    var len=arr.length;
    for(let i=0;i<len-1;i++){
        let min = i;
        for(let j=i + 1; j<len; j++){
            if(arr[j]<arr[min]){
                // 更小的位置
                min=j;
            }
        }
    //   min 是小的位置， i 是当前位置
      [arr[min], arr[i]] = [arr[i], arr[min]]
    }
    return arr;
}


const arr = generateArray(5);
console.log(arr);
console.log(selectSort(arr));