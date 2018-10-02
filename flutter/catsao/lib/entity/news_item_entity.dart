import 'package:intl/intl.dart';

class NewsItemEntity {
  static final TAG = 'NewsItemEnity';

  int id;
  String uniquekey;
  String title;
  int date;
  String category;
  String author;
  String url;
  String thumbnail0;
  String thumbnail1;
  String thumbnail2;
  String humanableDate;

  NewsItemEntity({this.uniquekey, this.title, this.humanableDate, this.category,
  this.author, this.url, this.thumbnail0, this.thumbnail1, this.thumbnail2}) {
    DateTime datetime = DateTime.parse(humanableDate);
    this.date = datetime.millisecondsSinceEpoch;
  }

  // NewsItemEntity.fromMap(Map map) {
  //   id = map
  // }
}
