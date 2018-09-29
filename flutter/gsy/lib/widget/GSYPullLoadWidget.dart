import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:gsy/common/style/GSYStyle.dart';

class GSYPullLoadWidget extends StatefulWidget {
  final IndexedWidgetBuilder itemBuilder;
  final RefreshCallback onLoadMore;
  final RefreshCallback onRefresh;
  final GSYPullLoadWidgetControl control;
  final Key refreshKey;

  GSYPullLoadWidget(this.control, this.itemBuilder, this.onRefresh, this.onLoadMore, {this.refreshKey});

  @override
  _GSYPullLoadWidgetState createState()=>_GSYPullLoadWidgetState(this.control, this.itemBuilder, this.onRefresh, this.onLoadMore, this.refreshKey);
}

class _GSYPullLoadWidgetState extends State<GSYPullLoadWidget> {
  final IndexedWidgetBuilder itemBuilder;
  final RefreshCallback onLoadMore;
  final RefreshCallback onRefresh;
  final Key refreshKey;
  GSYPullLoadWidgetControl control;
  _GSYPullLoadWidgetState(this.control, this.itemBuilder, this.onRefresh, this.onLoadMore, this.refreshKey);

  final ScrollController _scrollController = new ScrollController();

  @override
  void initState() {
    _scrollController.addListener(() {
      if (_scrollController.position.pixels == _scrollController.position.maxScrollExtent) {
        if (this.control.needLoadMore) {
          this.onLoadMore?.call();
        }
      }
    }); 
    super.initState();
  }

  _getItem(int index) {
    if (!control.needHeader && index == control.dataList.length && control.dataList.length != 0) {
      return _buildProgressIndicator();
    } else if (control.needHeader && index == _getListCount() - 1 && control.dataList.length != 0) {
      return _buildProgressIndicator();
    } else if (!control.needHeader && control.dataList.length == 0) {
      return _buildEmtpy();
    } else {
      return itemBuilder(context, index);
    }
  }

  Widget _buildEmtpy() {
    return new Container(
      height: MediaQuery.of(context).size.height-100,
      child: new Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          FlatButton(
            onPressed: () {},
            child: new Image(image: new AssetImage(GSYICons.DEFAULT_USER_ICON), width: 70.0, height: 70.0),
          ),
          Container(
            child: Text('没有数据', style: GSYConstant.normalText),
          )
        ],
      )
    );
  }

  _getListCount() {
    if (control.needHeader) {
      return (control.dataList.length > 0) ? control.dataList.length + 2 : control.dataList.length + 1;
    } else {
      if (control.dataList.length == 0) {
        return 1;
      }

      return (control.dataList.length > 0 ) ? control.dataList.length + 1 : control.dataList.length;
    }
  }

  @override
  Widget build(BuildContext context) {
    return new RefreshIndicator(
      key: refreshKey,
      onRefresh: onRefresh,
      child: new ListView.builder(
        physics: const AlwaysScrollableScrollPhysics(),
        itemBuilder: (context, index) {
          return _getItem(index);
        },
        itemCount: _getListCount(),
        controller: _scrollController,
      )
    );
  }

  Widget _buildProgressIndicator() {
    Widget bottomWidget = (control.needLoadMore)
     ? new Row(mainAxisAlignment: MainAxisAlignment.center, children: <Widget>[
       new SpinKitRotatingCircle(color: Theme.of(context).primaryColor),
       new Container(
         width: 5.0
       ),
       new Text(
         '加载更多',
         style: TextStyle(
           color: Color(0xFF121917),
           fontSize: 14.0,
           fontWeight: FontWeight.bold,
         ),
       )
     ]): new Container();

     return new Padding(
       padding: const EdgeInsets.all(20.0),
       child: new Center(
         child: bottomWidget
       )
     );
  }
}

class GSYPullLoadWidgetControl {
  List dataList = new List();
  bool needLoadMore = true;
  bool needHeader = false;
}