import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:gsy/common/redux/GSYState.dart';

class LoginPage extends StatefulWidget {
  static final String sName = "/login";

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    return StoreBuilder<GSYState>(
      builder: (context, store) {
        return new Container(
          color: Color(0xFFFFFFFF),
          child: new Center(
            child: new Image(image: new AssetImage('static/images/welcome.png'))
          )
        );
      }
    );
  }
}


