import 'dart:async';

abstract class Loader<T> {
  Future<List<T>> loadData({ DataSource datasource: DataSource.DEFAULT, int offset, int limit});
}

enum DataSource {
  DEFAULT,
  NETWORK,
  DATABASE
}