import 'package:flutter/material.dart';

class Carousel extends StatefulWidget {

  final List children;

  int get childrenCount => children.length;

  final Curve animationCurve;

  final Duration animationDuration;

  final bool showIndicator;

  final bool borderRaidus;

  final Radius radius;

  final double moveIndicatorFromBottom;

  final bool noRadiusForIndicator;

  final double indicatorBgPadding;

  final double dotSize;

  final double dotSpacing;

  final Color dotColor;

  final Color dotSelectedColor;

  final Color dotBgColor;

  Carousel({
    this.children,
    this.animationCurve = Curves.ease,
    this.animationDuration = const Duration(milliseconds: 250),
    this.showIndicator = true,
    this.borderRaidus = false,
    this.radius,
    this.indicatorBgPadding = 20.0,
    this.moveIndicatorFromBottom = 0.0,
    this.noRadiusForIndicator = false,
    this.dotSize = 8.0,
    this.dotSpacing = 25.0,
    this.dotColor = const Color(0xFFCCCCCC),
    this.dotSelectedColor = Colors.grey,
    this.dotBgColor,
  }): assert(children != null),
      assert(children.length > 1),
      assert(animationCurve != null),
      assert(animationDuration != null);

  @override
  State createState() => new _CarouselState();
}

class _CarouselState extends State<Carousel> with SingleTickerProviderStateMixin {
  TabController _controller;
  int get actualIndex => _controller.index;

  int selectedIndex = 0;

  int get nextIndex {
    var nextIndexValue = actualIndex;
    if (nextIndexValue < _controller.length -1)
      nextIndexValue++;
    else
      nextIndexValue = 0;
    
    return nextIndexValue;
  }

  @override
  void initState() {
    super.initState();

    _controller = new TabController(length: widget.childrenCount, vsync: this);
    _controller.addListener(_handleTabSelection);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void _handleTabSelection() {
    setState(() {
      selectedIndex = _controller.index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      body: new Stack(
        children: <Widget>[
          new TabBarView(
            children: widget.children.map((widget) => new Center(child: widget,)).toList(),
            controller: this._controller,
          ),
          widget.showIndicator ? new Positioned(
            bottom: widget.moveIndicatorFromBottom,
            left: 0.0,
            right: 0.0,
            child: new Container(
              decoration: new BoxDecoration(
                color: widget.dotBgColor == null ? Colors.transparent : widget.dotBgColor,
                borderRadius: widget.borderRaidus ? (widget.noRadiusForIndicator ? null : new BorderRadius.only(
                  bottomLeft: widget.radius != null ? widget.radius : new Radius.circular(8.0),
                  bottomRight: widget.radius != null ? widget.radius : new Radius.circular(8.0)
                )) : null,
              ),
              padding: new EdgeInsets.all(widget.indicatorBgPadding),
              child: new Center(
                child: new DotsIndicator(
                  controller: _controller,
                  itemCount: widget.children.length,
                  color: widget.dotColor,
                  selectedIndex: selectedIndex,
                  selectedColor: widget.dotSelectedColor,
                  dotSize: widget.dotSize,
                  dotSpacing: widget.dotSpacing
                )
              )
            ),
          ): new Container(),
        ]
      )
    );
  }
}

class DotsIndicator extends StatelessWidget {
  DotsIndicator({
    this.controller,
    this.itemCount,
    this.color,
    this.dotSize,
    this.selectedIndex,
    this.selectedColor,
    this.dotSpacing
  });

  final TabController controller;

  final int itemCount;

  final int selectedIndex;

  final Color color;

  final Color selectedColor;

  final double dotSize;

  final double dotSpacing;

  Widget _buildDot(int index) {
    return new Container(
      width: dotSpacing,
      child: new Center(
        child: new Material(
          color: index == selectedIndex ? selectedColor : color,
          type: MaterialType.circle,
          child: new Container(
            width: dotSize,
            height: dotSize
          )
        )
      )
    );
  }

  Widget build(BuildContext context) {
    return new Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: new List<Widget>.generate(itemCount, _buildDot)
    );
  }
}