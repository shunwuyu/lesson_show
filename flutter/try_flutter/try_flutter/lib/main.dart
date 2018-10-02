import 'package:flutter/material.dart';

import 'ghflutter.dart';
import 'strings.dart';

void main() => runApp(new GHFlutterApp());

class GHFlutterApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: Strings.appTitle,
      theme: new ThemeData(primaryColor: Colors.green.shade800),
      home: new GHFlutter(),
    );
  }
}

// 创建状态对象


