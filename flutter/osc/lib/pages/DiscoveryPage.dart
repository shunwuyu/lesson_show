import 'package:flutter/material.dart';

class DiscoveryPage extends StatelessWidget {
  // List listData = [];
  renderRow(BuildContext ctx, int i) {
    var listItemContent = new Padding(
      padding: const EdgeInsets.fromLTRB(10.0, 15.0, 10.0, 15.0),
      child: new Row(
        children: <Widget>[
          new Text('bbb')
        ]
      )
    );
    return new InkWell(
      onTap: () {

      },
      child: listItemContent,
    );
  }

  @override
  Widget build(BuildContext context) {
    return new Padding(
      padding: const EdgeInsets.fromLTRB(0.0, 20.0, 0.0, 0.0),
      child: new ListView.builder(
        itemCount: 0,
        itemBuilder: (context, i) => renderRow(context, i),
      )
    );
  }
}

