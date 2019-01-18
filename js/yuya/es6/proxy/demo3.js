function Archiver() {
  var value = null;
  // archive n. 档案
  var archive = [];

  Object.defineProperty(this, 'num', {
      get: function() {
          console.log('执行了 get 操作')
          return value;
      },
      set: function(value) {
          console.log('执行了 set 操作')
          value = value;
          archive.push({ val: value });
      }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.num; // 执行了 get 操作
arc.num = 11; // 执行了 set 操作
arc.num = 13; // 执行了 set 操作
console.log(arc.getArchive());