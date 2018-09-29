import 'package:flutter/material.dart';
import 'package:gsy/widget/GSYPullLoadWidget.dart';
import 'dart:async';

abstract class GSYListState<T extends StatefulWidget> extends State<T> with AutomaticKeepAliveClientMixin {
  bool isShow = false;
  bool isLoading = false;
  int page = 1;
  final List dataList = new List();
  final GSYPullLoadWidgetControl pullLoadWidgetControl = new GSYPullLoadWidgetControl();
  final GlobalKey<RefreshIndicatorState> refreshIndicatorKey = new GlobalKey<RefreshIndicatorState>();

  @protected
  bool get needHeader => false;

  @override
  bool get wantKeepAlive => true;

  @protected
  bool get isRefreshFirst;

  List get getDataList => dataList;

  @override
  void initState() {
    isShow = true;
    super.initState();
    pullLoadWidgetControl.needHeader = needHeader;
    pullLoadWidgetControl.dataList = getDataList;
    if (pullLoadWidgetControl.dataList.length == 0 && isRefreshFirst) {
      showRefreshLoading();
    }
  }

  showRefreshLoading() {
    new Future.delayed(const Duration(seconds: 0), () {
      refreshIndicatorKey.currentState.show().then((e) {});
      return true;
    });
  }
}