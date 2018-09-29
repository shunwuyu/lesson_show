import 'dart:async';

import 'package:http/http.dart' as http;
import 'loader.dart';
import 'package:catsao/util/sp_helper.dart';
import 'package:catsao/entity/news_item_entity.dart';

class NewsLoader extends Loader<NewsItemEntity> {
  static NewsLoader _instance = new NewsLoader._internal();
  static String type = null;
  static String spLoadTimeKey = null;
  static String tabName = null;

  final String TAG = 'NewsLoader';
  final String JUHE_API_KEY = '3a86f36bd3ecac8a51135ded5eebe862';
  final String NEWS_URL = 'http://v.juhe.cn/toutiao/index?';
  int lastLoadTime = null;
  List<NewsItemEntity> data = [];

  factory NewsLoader(Map<String, String> options) {
    type = options['type'];
    spLoadTimeKey = options['spLoadTimeKey'];
    tabName = options['tabName'];
    return _instance;
  }

  SharedPreferenceHelper spHelper = null;

  NewsLoader._internal() {
    spHelper = new SharedPreferenceHelper();
  }

  @override
  Future<List<NewsItemEntity>> loadData({DataSource datasource: DataSource.DEFAULT, int offset, int limit}) async {
    if (data != null) {
      data.clear();
    } else {
      data = [];
    }

    await _loadDataFromNetwork();
    lastLoadTime = spHelper.getInt(spLoadTimeKey);
  }

  _loadDataFromNetwork() async {
    http.Response response = await http.get(_formatUrl());
    print(response);
  }

  _formatUrl() {
    return '${NEWS_URL}type=${type}&key=${JUHE_API_KEY}';
  }

  init() async {
    await spHelper.init();
  }
}
