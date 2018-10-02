import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

class NewsDetailPage extends StatefulWidget {
  String id;

  NewsDetailPage({Key key, this.id}) :super(key: key);

  @override
  State<StatefulWidget> createState() {
    return new NewsDetailPageState();
  }
}

class NewsDetailPageState extends State<NewsDetailPage> {
  @override
  Widget build(BuildContext context) {
    return new Text('myinfopage');
  }
}