import 'package:flutter/material.dart';
import 'package:gsy/common/redux/ThemeRedux.dart';

class GSYState {
  // 主题数据
  ThemeData themeData;
  //构造方法
  GSYState({this.themeData});
}

GSYState appReducer(GSYState state, action) {
  return GSYState(
    themeData: ThemeDataReducer(state.themeData, action)
  );
}