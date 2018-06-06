[source](https://juejin.im/post/59b73d5bf265da064618731d)

[source](https://github.com/zuopf769/notebook/blob/master/fe/BFC%E5%8E%9F%E7%90%86%E5%89%96%E6%9E%90/README.md)

讲法：
  - 定位更宽泛的概念

BFC  Block Formatting Context 块格式化上下文，CSS渲染定位的一个概念。

视觉格式化模型
visual formatting model 处理文档并将它显示到视觉媒体上的机制。

盒的生成， 块盒，行内盒， 匿名盒（没有名字不能被选择器选中的盒）以及一些实验性的盒，由display 决定

块盒 （block box）
* display block,list-item或table 是块级元素block-level
* 视沈上呈现为块，竖直排列
* 块级盒参与（块格式化上下文）
* 每个块级元素至少生成一个块级盒，称为主要块级盒。
一些元素， li, 生成额外的盒来放置项目符号，不过多级元素只生成一个主要块级盒。

行内盒
* css display inline  inline-block  inline-table称为行内级元素
* 段落内容， 有文本，图片，它将内容与其它行内元素排列为多行。
* 行内级元素生成行内级盒（inline-leve boxes）,参与行内格式化上下文（inline formatting context） 非替换元素生成的盒是行内盒
* 不参与生成行内格式化上下文的行内盒称为原子行内级盒（atomic inline-level boxes）

匿名盒
  没有名字， 不能利用选择器来选择，inherit 或默认值。

定位方案
浏览器会根据元素的盒类型和上下文对这些元素进行定位， 盒是定位的基本单位。  三种方案， 常规流，浮动和绝对定位
常规流
 * 在常规流中，盒一个接着一个排列
 * 块级格式化上下文里面， 它们竖着排列
 * 在行内格式化上下文里， 它们模着排列
 * position为static 或relative 并且float为none时会触发常规流
 * 静态定位 (static positioning) position:static 盒的位置是常规流布局里的位置；
 * 相对定位relative position  盒偏移位置由这些属性定义
 top  bottom, left and right 即使有偏移， 仍然保留原有的位置，其它常规流不能占用这个位置。

 浮动（Floats）
 * 盒称为浮动盒
 * 它位于当前行的开头或未尾
 * 导致常规流环绕在它的周边， 除非设置clear属性

 绝对定位
 * 盒从常规流中被移除， 不影响常规流的布局；
 * 相对于它的包含块
 * absolute 或fixed 绝对定位
 * 最近一个relative, fixed, 或absolute 父元素， 否则body

块格式化上下文
块格式化上下文是页面css视觉渲染的一部分， 用于决定块盒子的布局及浮动相互影响范围的一个区域。

BFC的创建方法
根元素或其它包含它的元素
浮动（不为none）
绝对定位元素(absolute或fixed)
行内块(inline-block)
表格元素(table table-cell)
overflw 值不为visible
弹性盒 flex 

A block formatting context contains everything inside of the element creating it that is not also
inside a descendant element that creates a new block formatiing context.
一个BFC包含创建该上下文元素的所有子元素， 但不包含创建了新BFC的子元素的内部元素。
一个元素不能同时存在于两个BFC中。
让处于BFC内部的元素与外部的元素相互隔离，使内部元素的定位不会相互影响，
建立一个隔离的空间， 断绝空间内外元素相互的作用。

- 内部的盒会在垂直方向一个接一个排列
- 处于同一个BFC中的元素相互影响， 可能会发生magin collapse
- 每个元素的margin box 的左边，与容器border box 的左边相对接触
- BFC是一个隔离的独立容器， 不会影响到外面的元素，反之也是。
- 浮动盒区域不叠加到BFC上。
html 根元素会创建一个BFC, 相当于在内部创建一个新的html,
子元素的定位就像在html页面中一样， 旧的不会影响。
