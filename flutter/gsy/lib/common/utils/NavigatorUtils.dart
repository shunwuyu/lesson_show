import 'package:flutter/material.dart';
import 'package:gsy/page/HomePage.dart';

class NavigatorUtils {
  static goHome(BuildContext context) {
    Navigator.pushReplacementNamed(context, HomePage.sName);
  }
}
