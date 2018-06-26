let yourMsg = {};
yourMsg.peopleList = {};
yourMsg.listen = function(key, fn) {
  if (!this.peopleList[key]) {
    this.peopleList[key] = [];
  }
  this.peopleList[key].push(fn);
}

yourMsg.trigger = function() {
  let key = Array.prototype.shift.call(arguments);
  let fns = this.peopleList[key];
  if (!fns || fns.length == 0) {
    return false;
  }
  for (var i = 0, fn; fn = fns[i++];) {
    fn.apply(this, arguments);
  }
}

yourMsg.listen('marrige', function(msg) {
  console.log(`邓力同学收到${msg}, 订好票来参加`);
});
yourMsg.listen('marrige', function(msg) {
  console.log(`情敌收到${msg}, 并表示这个世界不好了`);
});
yourMsg.listen('marrige', function(msg) {
  console.log(`高中同桌收到${msg}, 准备送红包`);
});

yourMsg.listen('brokenhearted', function(msg) {
  console.log(`高中同桌收到${msg}, 曾凯来我家玩啊`);
});
yourMsg.listen('brokenhearted', function(msg) {
  console.log(`邓力收到${msg}, 一起喝一杯,一起看球`);
});
yourMsg.listen('brokenhearted', function(msg) {
  console.log(`情敌收到${msg}, 代码再牛逼，也比不过我姓王`);
});
yourMsg.trigger('marrige', '曾凯将于2018年10月1日举行婚礼, 到时请参加');
yourMsg.trigger('brokenhearted','曾凯同学失恋了');