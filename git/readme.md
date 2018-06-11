[source](https://juejin.im/post/5b0531c6f265da0b7f44eb8c)
一、打标签
给项目的开发节点， 加上语义化的名字，即功能版本的别名。
打上标签名， 写上附带信息，方便项目日后维护过程中的回溯和复查。

1. 主版本号： 不兼容的API修改
2. 次版本号： 向下兼容的功能性新增
3. 修订号： 向你做了向下兼容的问题修正

[source](https://github.com/zuopf769/how_to_use_git/blob/master/%E4%BD%BF%E7%94%A8git%20rebase%E5%90%88%E5%B9%B6%E5%A4%9A%E6%AC%A1commit.md)

repo 由一个team 中的多个人共同维护，增加一个feature, commit 多次， 会看到乱七八糟。

rebase 可以对某一段线性提交历史进行编辑、删除、复制、粘贴，合理使用rebase命令可以让提交历史干净、简洁。
不要通过rebase对任何已经提交到公共仓库中的commit 进行修改