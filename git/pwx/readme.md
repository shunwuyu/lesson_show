## 快速上手
  1. git repo  .gitignore  license
  2. .git 目录 本地仓库，.git的工作目录
  3. SHA-1校验各， 看内容意义
  4. git status
    - master branch
    - 没有落后于origin/master
    - 有untracked files 
      仓库没有任何记录， 它是不存在的
    - 可以使用git add 来开始追踪文件。
  5. untracked -> staged
    舞台？ 汇集待提交的文件改动的地方 暂存区   index 文件
  6. not stagged for commit 
  7. origin master 中央仓库

## 团队工作的基本工作模型
  1. git 管理是目录级别的， 不是设备级别的。
  2. 简单的合作：pull push 
    同时只能有一个人在工作。
    push 其实是用本地仓库的commits 记录去覆盖远端仓库的commits记录 会检查， push 就会失败
  3. git pull  是  git fetch + git merge的结合
  
## 进阶1： HEAD master 与branch 
  1. 操作commit 的快捷方式
  每个commit 都有一个它唯一的指定方式， 它的SHA-1校验和
  2. HEAD是最特殊的一个， 唯一
  当前工作目录对应的commit
  checkout reset 手动指定当前commit时候， HEAD也会一起跟过去。
  3. branch
  HEAD除了指向commit, 还可以指向一个branch 
  4. master是默认branch
  checkout 签出master, 把某个commit 作为当前的commit 把HEAD移动过去 
  5. branch 的通俗化理解：
    从初始commit 到branch所指向的commit 之间的所有commit S的一个串
    平等

## git 本质
push： 把branch 上传到远端仓库
1. 把当前的分支上传到远程仓库，并把这个branch的路径上的所有commit上一并上传
2. 指定远程分支名， 
3. 默认分支

## Feature Branching

1. 任何新的功能或bug 修复全部新建一个branch 够苹果难过
2. branch 写完后， 合并到master, 然后删除这个branch


  