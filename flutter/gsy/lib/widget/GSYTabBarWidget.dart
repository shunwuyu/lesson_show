import 'package:flutter/material.dart';

class GSYTabBarWidget extends StatefulWidget {

  static const int BOTTOM_TAB = 1;
  static const int TOP_TAB = 2;

  final int type;

  final Widget drawer;
  final Widget title;
  final List<Widget>tabItems;
  final Color indicatorColor;
  final List<Widget>tabViews;
  final PageController topPageControl;
  final Widget floatingActionButton;
  final ValueChanged<int> onPageChanged;
  final TarWidgetControl tarWidgetControl;

  GSYTabBarWidget({
    Key key,
    this.drawer,
    this.type,
    this.title,
    this.tabItems,
    this.indicatorColor,
    this.tabViews,
    this.topPageControl,
    this.onPageChanged,
    this.floatingActionButton,
  }): super(key: key);

  @override
  _GSYTabBarState createState() => new _GSYTabBarState();
}

class _GSYTabBarState extends State<GSYTabBarWidget> with SingleTickerProviderStateMixin {
  _GSYTabBarState();

  TabController _tabController;
  
  @override
  void initState() {
    super.initState();
    _tabController = new TabController(vsync: this, length: widget.tabItems.length);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (widget.type == GSYTabBarWidget.TOP_TAB) {
      return new Scaffold(
        floatingActionButton: widget.floatingActionButton,
        persistentFooterButtons: widget.tarWidgetControl == null ? [] : widget.tarWidgetControl.footerButton,
        drawer: widget.drawer,
        appBar: new AppBar(
          title: widget.title,
          backgroundColor: Theme.of(context).primaryColor,
          bottom: new TabBar(
            controller: _tabController,
            tabs: widget.tabItems,
            indicatorColor: widget.indicatorColor,
          ),
        ),
        body: new PageView(
          controller: widget.topPageControl,
          children: widget.tabViews,
          onPageChanged: (index) {
            _tabController.animateTo(index);
            widget.onPageChanged?.call(index);
          },
        ),
      );
    }

    return new Scaffold(
      drawer: widget.drawer,
      appBar: new AppBar(
        backgroundColor: Theme.of(context).primaryColor,
        title: widget.title,
      ),
      body: new TabBarView(
        controller: _tabController,
        children: widget.tabViews,
      ),
      bottomNavigationBar: new Material(
        color: Theme.of(context).primaryColor,
        child: new TabBar(
          controller: _tabController,
          tabs: widget.tabItems,
          indicatorColor: widget.indicatorColor,
        )
      ),
    );
  }
}

class TarWidgetControl {
  List<Widget>footerButton = [];
}



