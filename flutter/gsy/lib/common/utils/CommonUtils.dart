import 'dart:async';
import 'package:flutter/material.dart';
import 'package:gsy/common/style/GSYStyle.dart';
import 'package:redux/redux.dart';
import 'package:gsy/common/redux/ThemeRedux.dart';
class CommonUtils {
  static Future<Null> showCommitOptionDialog(BuildContext context, List<String> commitMaps, ValueChanged<int> onTap, {
    width = 250.0,
    height = 400.0,
    List<Color> colorList,
  }) {
    return showDialog(
      context: context,
      builder: (BuildContext context) {
        return Center(
          child: new Container(
            width: width,
            height: height,
            padding: new EdgeInsets.all(4.0),
            margin: new EdgeInsets.all(20.0),
            decoration: new BoxDecoration(
              color: Color(GSYColors.white),
              borderRadius: BorderRadius.all(Radius.circular(4.0)),
            ),
            child: new ListView.builder(
              itemCount: commitMaps.length,
              itemBuilder: (context, index) {
                return new FlatButton(
                  onPressed: () {
                    Navigator.pop(context);
                    onTap(index);
                  },
                  child: new Text(commitMaps[index]),
                );
              },
            )
          )
        );
      }
    );
  }

  static pushTheme(Store store, int index) {
    ThemeData themeData;
    List<Color> colors = getThemeListColor();
    themeData = new ThemeData(primarySwatch: colors[index], platform: TargetPlatform.iOS);
    store.dispatch(new RefreshThemeDataAction(themeData));
  }

  static List<Color> getThemeListColor() {
    return [
      GSYColors.primarySwatch,
      Colors.brown,
      Colors.blue,
      Colors.teal,
      Colors.amber,
      Colors.blueGrey,
      Colors.deepOrange,
    ];
  }
}