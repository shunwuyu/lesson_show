import 'package:flutter/material.dart';
import 'package:catsao/util/sp_helper.dart';
import 'package:flutter/rendering.dart';

class DrawerPage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => new _DrawerPageState();
}

class _DrawerPageState extends State<DrawerPage> {
  final String TAG = 'DrawerPageState';

  _initData() async {
    setState(() {});
  }

  @override
  void initState() {
    super.initState();
    _initData();
  }

  @override
  Widget build(BuildContext context) {
    List<Widget> widgets = [];
    widgets.add(new Image.asset("assets/flutter_bg.png"));

    return new Drawer(
      child: new Column(
        mainAxisAlignment: MainAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: widgets,
      )
    );
  }
}