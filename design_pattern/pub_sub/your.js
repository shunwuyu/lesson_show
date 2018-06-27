let yourMsg = {};
yourMsg.peopleList = [];
yourMsg.listen = function(fn) {
  this.peopleList.push(fn);
} 
yourMsg.trigger = function() {
  for (var i = 0, fn; fn = this.peopleList[i++];) {
    fn.apply(this, arguments);
  }
}

yourMsg.listen(function(msg) {
  console.log(`收到了你${msg}的消息, 开心`);
})

yourMsg.listen(function(msg) {
  console.log(`收到了你${msg}的消息, 笑哭`);
})

yourMsg.listen(function(msg) {
  console.log(`收到了你${msg}的消息, 决定给红包`);
})

yourMsg.listen(function(msg) {
  console.log(`收到了你${msg}的消息, 一定会来的`);
})

yourMsg.trigger('曾凯要结婚了');
yourMsg.trigger('曾凯生了个大胖小子');