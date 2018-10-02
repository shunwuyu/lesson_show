import 'package:flutter/material.dart';
import 'package:gsy/page/HomePage.dart';
import 'package:gsy/page/LoginPage.dart';

class NavigatorUtils {
  static goHome(BuildContext context) {
    Navigator.pushReplacementNamed(context, HomePage.sName);
  }
  static goLogin(BuildContext context) {
    Navigator.pushReplacementNamed(context, LoginPage.sName);
  }
}
