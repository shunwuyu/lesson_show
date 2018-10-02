import 'package:flutter/material.dart';
// import 'package:flutter/cupertino.dart';
import 'package:days/pages/home.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      theme: new ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: new HomePage()
    );
  }
}