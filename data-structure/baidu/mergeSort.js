function mergeSort(arr) {
    console.time('MergeSort');
    //let count = 0;
    console.log(main(arr));
    console.timeEnd('MergeSort');
    //return count;
    // 主函数。
    function main(arr) {
        console.log(arr)
        console.log('\n------');
        // 记得添加判断，防止无穷递归导致callstack溢出，此外也是将数组进行分解的终止条件。
        if(arr.length === 1) return arr;
        // 从中间开始分解，并构造左边数组和右边数组。
        let mid = Math.floor(arr.length/2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        // 开始递归调用。
        return merge(arguments.callee(left), arguments.callee(right));
    }
    // 数组的合并函数，left是左边的有序数组，right是右边的有序数组。
    function merge(left, right) {
        console.log(left, right)
        console.log('\n-------');
        console.log(left.length, right.length);
        // il是左边数组的一个指针，rl是右边数组的一个指针。
        let il = 0,
            rl = 0,
            result = [];
        // 同时遍历左右两个数组，直到有一个指针超出范围。
        while(il < left.length && rl < right.length) {
            //count++;
            // 左边数组的当前项如果小于右边数组的当前项，那么将左边数组的当前项推入result，反之亦然，同时将推入过的指针右移。
            if(left[il] < right[rl]) {
                result.push(left[il++]);
            }
            else {
                result.push(right[rl++]);
            }
        }
        // 记得要将未读完的数组的多余部分读到result。
        return result.concat(left.slice(il)).concat(right.slice(rl));
    }
}

mergeSort([8,7,6,5]);