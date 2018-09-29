[teemo](http://lol.qq.com/act/a20161020teemo/click.html)

- 先炉火
- 头部留42像素的做法
- 定位 + 背景 + 动画
  1. 定位
  http://www.w3school.com.cn/tiy/t.asp?f=csse_position_absolute
  ``` html
    <html>
      <head>
      <style type="text/css">
      .box {
        position: absolute;
        width: 300px;
        height: 300px;
        top: 100px;
        left: 100px;
        background-color: red;
      }
      .inner-box {
        position: relative;
        height: 200px;
        width: 200px;
        margin: 20px auto;
        background-color: blue;
      }
      .small-box {
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: yellow;
        bottom: 0px;
        right: 0px;
      }
      .dot-box {
        position: fixed;
        bottom: 15px;
        right: 10px;
        width: 50px;
        height: 50px;
        background-color: green;
      }
      </style>
      </head>

      <body>
        <div class="box">
          <div class="inner-box">
            <div class="small-box">
              
            </div>
          </div>
          <div class="dot-box"></div>
        </div>
      </body>
    </html>
  ```
  2. background
    
- 难点
  1.steps 
    timing function 允许将动画或过渡分割成段， 从一种状态持续到另一种状态的过渡。分割的段数（参数）

- overflow  当跑出去的时候