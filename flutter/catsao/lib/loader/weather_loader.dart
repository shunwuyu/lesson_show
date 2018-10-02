import 'dart:async';

import 'package:http/http.dart' as http;
import 'package:location/location.dart';
import 'package:flutter/services.dart';
// import 'dart:convert';

import 'package:catsao/loader/loader.dart';
import 'package:catsao/entity/weather_entity.dart';
import 'package:catsao/util/sp_helper.dart';


class WeatherLoader extends Loader<WeatherEntity> {
  static WeatherLoader _instance = new WeatherLoader._internal();
  static const String _API_KEY = '616f06eea4844970a1e8a9a27566f767';

  final String WEATHER_URL = 'https://free-api.heweather.com/s6/weather/now?';
  final String TAG = 'WeatherLoader';

  int lastLoadTime = null;
  Map<String, double> _currentLocation;
  List<WeatherEntity> data = null;

  factory WeatherLoader() {
    return _instance;
  }

  SharedPreferenceHelper spHelper = null;

  WeatherLoader._internal() {
    spHelper = new SharedPreferenceHelper();
  }

  init() async {
    await spHelper.init();
    _currentLocation = <String, double>{};
    var location = new Location();

    try {
      _currentLocation = await location.getLocation();
      print(_currentLocation);
    } on PlatformException{
      _currentLocation = null;
    }
  }

  @override
  Future<List<WeatherEntity>> loadData({DataSource datasource: DataSource.DEFAULT, int offset, int limit}) async {
    if (data != null) {
      data.clear();
    } else {
      data = [];
    }

    lastLoadTime = spHelper.getInt(SharedPreferenceHelper.KEY_WEATHER_LAST_LOADTIME);
    try {
      // if (lastLoadTime == null || new DateTime.now().millisecondsSinceEpoch - lastLoadTime > 1000 * 60 * 60) {
        await _loadDataFromNetwork();
      // }
    } catch(ex) {
      data = null;
    }
    return data;
  }

  _loadDataFromNetwork() async {
    http.Response response = await http.get(_formatUrl());
    print(response);
  }

  _formatUrl() {
    return '${WEATHER_URL}location=${_currentLocation['longitude']},${_currentLocation['latitude']}&key=${_API_KEY}';
  }
}

