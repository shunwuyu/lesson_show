import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:gsy/common/redux/GSYState.dart';
import 'package:gsy/common/style/GSYStyle.dart';
import 'package:gsy/common/utils/NavigatorUtils.dart';
import 'package:redux/redux.dart';

class WelcomePage extends StatefulWidget {
  static final String sName = "/";

  @override
  _WelcomePageState createState() => _WelcomePageState();
}

class _WelcomePageState extends State<WelcomePage> {
  bool hadInit = false;

  @override initState() {

  }

  @override
  void didChangeDependencies() {
    // TODO: implement didChangeDependencies
    super.didChangeDependencies();
    if (hadInit) {
      return;
    }

    hadInit = true;
    print('xxx');
    Store<GSYState> store = StoreProvider.of(context);
    new Future.delayed(const Duration(seconds: 2), () {
      // NavigatorUtils.goHome(context);
      NavigatorUtils.goLogin(context);
    });
  }

  @override
  Widget build(BuildContext context) {
    // new Future.delayed(const Duration(seconds: 2), () {
    //   NavigatorUtils.goHome(context);
    // });
    return StoreBuilder<GSYState>(
      builder: (context, store) {
        return new Container(
          color: Color(GSYColors.white),
          child: new Center(
            child: new Image(image: new AssetImage('static/images/welcome.png')),
          )
        );
      }
    );
  }
}


