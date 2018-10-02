import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:gsy/common/redux/GSYState.dart';
import 'package:gsy/common/style/GSYStyle.dart';
import 'package:redux/redux.dart';
import 'package:gsy/common/utils/CommonUtils.dart';

class HomeDrawer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new StoreBuilder<GSYState>(
      builder: (context, store) {
        return new Drawer(
          child: new Container(
            color: store.state.themeData.primaryColor,
            child: new SingleChildScrollView(
              child: Container(
                constraints: new BoxConstraints(minHeight: MediaQuery.of(context).size.height),
                child: new Material(
                  color: Color(GSYColors.white),
                  child: new Column(
                    children: <Widget>[
                      new UserAccountsDrawerHeader(
                        accountName: new Text(
                          '喻顺武',
                          style: GSYConstant.largeTextWhite,
                        ),
                        accountEmail: new Text(
                          '旅梦开发团',
                          style: GSYConstant.normalTextLight,
                        ),
                        currentAccountPicture: new GestureDetector(
                          onTap: () {

                          },
                          child: new CircleAvatar(
                            backgroundImage: new NetworkImage(GSYICons.DEFAULT_REMOTE_PIC),
                          ),
                        ),
                        decoration: new BoxDecoration(
                          color: store.state.themeData.primaryColor
                        ),
                      ),
                      new ListTile(
                        title: new Text(
                          '问题反馈',
                          style: GSYConstant.normalText,
                        ),
                        onTap: () {
                          String content = "";

                        },
                      ),
                      new ListTile(
                        title: new Text(
                          '阅读历史',
                          style: GSYConstant.normalText
                        ),
                        onTap: () {

                        }
                      ),
                      new ListTile(
                        title: new Text(
                          '个人信息',
                          style: GSYConstant.normalText
                        ),
                        onTap: () {

                        }
                      ),
                      new ListTile(
                        title: new Text(
                          '切换主题',
                          style: GSYConstant.normalText
                        ),
                        onTap: () {
                          showThemeDialog(context, store);
                        }
                      ),
                      new ListTile(
                        title: new Text(
                          '语言切换',
                          style: GSYConstant.normalText
                        ),
                        onTap: () {
                          
                        }
                      ),
                      new ListTile(
                        title: new Text(
                          '检测更新',
                          style: GSYConstant.normalText
                        ),
                        onTap: () {
                          
                        }
                      ),
                      new ListTile(
                        title: new Text(
                          '关于',
                          style: GSYConstant.normalText
                        ),
                        onTap: () {
                          
                        }
                      ),
                      new ListTile(
                        title: new Text(
                          '退出登录',
                          style: GSYConstant.normalText
                        ),
                        onTap: () {
                          
                        }
                      ),
                      
                    ]
                  )
                )
              )
            )
          )
        );
      }
    );
  }
  showThemeDialog(BuildContext context, Store store) {
    List<String> list = [
      '默认主题',
      '主题1',
      '主题2',
      '主题3',
      '主题4',
      '主题5',
      '主题6'
    ];
    CommonUtils.showCommitOptionDialog(context, list, (index) {
      print('111');
      CommonUtils.pushTheme(store, index);
    }, height: 250.0);

  }
}