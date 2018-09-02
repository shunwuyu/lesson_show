import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:gsy/common/redux/GSYState.dart';

class HomePage extends StatefulWidget {
  static final String sName = "/home";

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return StoreBuilder<GSYState>(
      builder: (context, store) {
        return new Container(
          color: Color(0xFFFFFFFF),
          child: new Center(
            child: new Text('home')
          )
        );
      }
    );
  }
}


