function unique(arr) {https://github.com/cccyb/vue-eleme-app/blob/master/src/common/stylus/icon.styl
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    let res = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        let flag = true
        for (let j = 0; j < res.length; j++) {
            if (arr[i] === res[j]) {
                flag = false;
                break
            }
        }
        if (flag) {
            res.push(arr[i])
        }
    }
    return res
}

console.log(unique([1,2,3,2,1,4,5,3]));