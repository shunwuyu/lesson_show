var topKFrequent = function(nums, k) {
  function Node(n,c){
      this.num = n;
      this.count = c;
  }
  var len = nums.length;
  var dataMap = {};
  for(var i=0;i<len;i++){
      if(dataMap[nums[i]] === undefined){
          dataMap[nums[i]] = new Node(nums[i],1);
      }else{
          dataMap[nums[i]].count++;
      }
  }
  var array = [];
  for(var key in dataMap){
      array.push(dataMap[key]);
  }
  array.heapSort();
  len = array.length;
  var ret=[];
  for(i=0;i<k;i++){
      var j = len-1-i;
      ret.push(array[j].num);
  }
  return ret;
};
// 堆排序算法：大根堆调整出的其实是从小到大排列的数组。

Array.prototype.buildMaxHeap=function(){
  for(var i=Math.floor(this.length/2)-1;i>=0;i--){
      this.heapAdjust(i,this.length);
  }
};

Array.prototype.swap=function(i,j){
  var tmp=this[i];
  this[i]=this[j];
  this[j]=tmp;
};

Array.prototype.heapSort=function(){
  this.buildMaxHeap();
  for(var i=this.length-1;i>0;i--){
      this.swap(0,i);
      this.heapAdjust(0,i);
  }
  return this;
};

Array.prototype.heapAdjust=function(i,j){
  var largest=i;
  var left=2*i+1;
  var right=2*i+2;
  if(left<j&&this[largest].count<this[left].count){
      largest=left;
  }
  if(right<j&&this[largest].count<this[right].count){
      largest=right;
  }
  if(largest!=i){
      this.swap(i,largest);
      this.heapAdjust(largest,j);
  }
};

console.log(topKFrequent([1,1,1,2,2,3], 2));