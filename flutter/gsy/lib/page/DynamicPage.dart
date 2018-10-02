import 'package:flutter/material.dart';
import 'package:gsy/widget/GSYListState.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:gsy/common/redux/GSYState.dart';
import 'package:gsy/widget/GSYPullLoadWidget.dart';
import 'dart:async';

class DynamicPage extends StatefulWidget {
  @override
  _DynamicPageState createState() => _DynamicPageState();
}

class _DynamicPageState extends GSYListState<DynamicPage> with WidgetsBindingObserver {
  @override
  bool get isRefreshFirst => false;

  @override
  Future<Null> handleRefresh() async {

  }

  @override
  Future<Null> onLoadMore() async {

  }

  @override
  Widget build(BuildContext context) {
    super.build(context);
    return new StoreBuilder<GSYState>(
      builder: (context, store) {
        return GSYPullLoadWidget(
          pullLoadWidgetControl,
          (BuildContext context, int index) => _renderEventItem(),
          handleRefresh,
          onLoadMore,
          refreshKey: refreshIndicatorKey,
        );
      }
    );
  }

  _renderEventItem() {
    return new Text('sss');
  }
}

