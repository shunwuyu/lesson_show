<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>mvvm</title>
</head>
<body>
  <div id="app">
    <h3>姓名</h3>
    <p>{{name}}</p>
    <h3>年龄</h3>
    <p>{{age}}</p>
    <div class="msg">
      <p>{{msg}}</p>
    </div>
  </div>
  <script>
    class Observer {
      constructor () {
        this.subNode = [];
      }
      addSubNode(node) {
        this.subNode.push(node);
      }
      update(newVal) {
        this.subNode.forEach(node => {
          node.innerHTML = newVal
        })
      }
    }
    class Vue {
      constructor (opt) {
        this.opt = opt;
        this.observe(opt.data);
        this.root = document.querySelector(opt.el)
        this.compile(this.root);
      }
      observe (data) {
        Object.keys(data).forEach(key => {
          // console.log(key);
          let obv = new Observer()
          // 不能再触发多次读取
          data["_" + key] = data[key]
          // console.log(data);
          Object.defineProperty(data, key, {
            get () {
              Observer.target && obv.addSubNode(Observer.target);
              return data['_' + key]
            },
            set (newVal) {
              obv.update(newVal);
              data['_' + key] = newVal
            }
          })
        })
      }
      compile (node) {
        [].forEach.call(node.childNodes, child => {
          // console.log(child);
          // 找到第一个子节点为文本结点的元素
          if (!child.firstElementChild && /\{\{(.*)\}\}/.test(child.innerHTML)) {
            // console.log(child)
            let key = RegExp.$1.trim();
            // console.log(key);
            // 空格 \s  m 多行匹配
            child.innerHTML = child.innerHTML.replace(new RegExp('\\{\\{\\s*'+ key +'\\s*\\}\\}', 'gm'), this.opt.data[key])
            Observer.target = child
            // 触发get
            this.opt.data[key]
            Observer.target = null
          } else if (child.firstElementChild) {
            this.compile(child);
          }
        })
      }
    }
    document.addEventListener('DOMContentLoaded', function() {
      let opt = { el: '#app', data: {
        name: '检索中...',
        age: 30,
        msg: 'vue 高手，月薪5万'
      }}
      window.vm = new Vue(opt);
      setTimeout(() => {
        opt.data.name = '王永峰'
      }, 2000);
    }, false);
  </script>
</body>
</html>