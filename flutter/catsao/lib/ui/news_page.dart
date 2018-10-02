import 'package:flutter/material.dart';
import 'package:catsao/entity/news_item_entity.dart';
import 'package:catsao/loader/news_loader.dart';
import 'package:catsao/util/sp_helper.dart';
import 'package:catsao/util/strings_helper.dart';

class NewsPage extends StatefulWidget {
  String tabName = null;
  NewsPage({this.tabName});

  @override
  State<StatefulWidget> createState() => new _NewsPageState();
}

class _NewsPageState extends State<NewsPage> with SingleTickerProviderStateMixin {
  final String TAG = 'NewsPageState';
  List<NewsItemEntity> _newsItemInfo = [];
  String type = null;
  String spLoadTimeKey = null;
  int lastLoadTime = null;
  SharedPreferenceHelper spHelper = new SharedPreferenceHelper();
  NewsLoader newsLoader = null;

  _generateBody() {
    return new Text('xx');
  }

  @override
  void initState() {
    super.initState();
    _initData();
  }

  _initData() async {
    switch(widget.tabName) {
      case StringResources.TAB_TOP_CN:
        type = 'top';
        spLoadTimeKey = SharedPreferenceHelper.KEY_TOP_LAST_LOADTIME;
      break;
      case StringResources.TAB_SH_CN:
        type = 'shehui';
        spLoadTimeKey = SharedPreferenceHelper.KEY_SH_LAST_LOADTIME;
        break;
    }

    Map<String, String> options = {
      'type': type,
      'spLoadTimeKey': spLoadTimeKey,
      'tabName': widget.tabName
    };
    newsLoader = new NewsLoader(options);
    await newsLoader.init();
    // _loadData(DataSource.DEFAULT);
  }

  @override
  Widget build(BuildContext context) {
    return _generateBody();
  }
}