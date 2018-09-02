[source](https://github.com/CarGuo/GSYGithubAppFlutter/blob/master/lib/main.dart)

- 重写main.dart 集成redux
  - 安装 flutter_redux: ^0.5.2   pubspec.yml
  - GSYState.dart
    - ThemeRedux.dart
      combineReducers 
  - MaterialApp
    一个方便的widget 使用material desin
    configures the top-level Navigator to search for routes in the following order.
    - routes
  - WelcomePage
    只执行一次 hadInit
    生命周期
    didChangeDependencies 
    在initState之后执行， 状态改变后执行


