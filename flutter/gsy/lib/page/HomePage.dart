import 'package:flutter/material.dart';
// import 'package:flutter_redux/flutter_redux.dart';
// import 'package:gsy/common/redux/GSYState.dart';
import 'package:gsy/widget/GSYTabBarWidget.dart';
import 'package:gsy/widget/HomeDrawer.dart';
import 'package:gsy/widget/GSYTitleBar.dart';
import 'package:gsy/common/style/GSYStyle.dart';
import 'package:gsy/page/DynamicPage.dart';
import 'package:gsy/page/MyPage.dart';
import 'package:gsy/page/TrendPage.dart';


class HomePage extends StatefulWidget {
  static final String sName = "/home";

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    List<Widget> tabs = [
      _renderTab(GSYICons.MAIN_DT, '动态'),
      _renderTab(GSYICons.MAIN_QS, '趋势'),
      _renderTab(GSYICons.MAIN_QS, '趋势'),
    ];
    return WillPopScope(
      onWillPop: () {

      },
      child: new GSYTabBarWidget(
        drawer: new HomeDrawer(),
        type: GSYTabBarWidget.BOTTOM_TAB,
        tabItems: tabs,
        tabViews: [
          new DynamicPage(),
          new TrendPage(),
          new MyPage(),
        ],
        title: GSYTitleBar(
          'GSY',
          needRightLocalIcon: true,
          onPressed: () {

          },
          iconData: GSYICons.MAIN_SEARCH,
        )
      ),
    );
  }

  _renderTab(icon, text) {
    return new Tab(
      child: new Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          new Icon(icon, size: 16.0),
          new Text(text)
        ],
      )
    );
  }
}


