module.exports  = generateArray = function(length) {
    let arr = Array(length);
    for(let i=0; i<length; i++) {
        arr[i] = Math.ceil(Math.random()*100);
    }
    return arr;
};