import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:redux/redux.dart';
import 'package:gsy/common/redux/GSYState.dart';
import 'package:gsy/page/WelcomePage.dart';
import 'package:gsy/page/HomePage.dart';
import 'package:gsy/page/LoginPage.dart';

void main() {
  runApp(new FlutterReduxApp());
}

class FlutterReduxApp extends StatelessWidget {
  final store = new Store<GSYState>(
    appReducer,
    initialState: new GSYState(
      themeData: new ThemeData(
        platform: TargetPlatform.iOS
      )
    )
  );
  @override
  Widget build(BuildContext context) {
    return new StoreProvider(
      store: store,
      child: new StoreBuilder<GSYState>(builder: (context, store) {
        return new MaterialApp(
          theme: store.state.themeData,
          routes: {
            WelcomePage.sName: (context) {
              return WelcomePage();
            },
            HomePage.sName: (context) {
              return HomePage();
            },
            LoginPage.sName: (context) {
              return LoginPage();
            }
          }
        );
      }),
    );
  }
}