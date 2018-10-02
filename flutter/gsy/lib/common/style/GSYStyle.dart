import 'package:flutter/material.dart';
class GSYColors {
  static const int white = 0xFFFFFFFF;
  static const int textColorWhite = white;
  static const int primaryLightValue = 0xFF42464b;
  static const int primaryDarkValue = 0xFF121917;

  static const int primaryValue = 0xFF24292E;

  static const int mainTextColor = primaryDarkValue;
  static const int cardWhite = 0xFFFFFFFF;
  static const int textWhite = 0xFFFFFFFF;
  static const MaterialColor primarySwatch = const MaterialColor(
    primaryValue,
    const <int, Color>{
      50: const Color(primaryLightValue),
      100: const Color(primaryLightValue),
      200: const Color(primaryLightValue),
      300: const Color(primaryLightValue),
      400: const Color(primaryLightValue),
      500: const Color(primaryValue),
      600: const Color(primaryDarkValue),
      700: const Color(primaryDarkValue),
      800: const Color(primaryDarkValue),
      900: const Color(primaryDarkValue),
    }
  );
}

class GSYConstant {
  static const bigTextSize = 23.0;
  static const normalTextSize = 18.0;

  static const largeTextWhite = TextStyle(
    color: Color(GSYColors.textColorWhite),
    fontSize: bigTextSize,
  );
  static const normalTextLight = TextStyle(
    color: Color(GSYColors.primaryLightValue),
    fontSize: normalTextSize,
  );

  static const normalText = TextStyle(
    color: Color(GSYColors.mainTextColor),
    fontSize: normalTextSize,
  );
}

class GSYICons {
  static const String FONT_FAMILY = 'wxcIconFont';
  static const String DEFAULT_REMOTE_PIC = 'https://raw.githubusercontent.com/CarGuo/GSYGithubAppFlutter/master/static/images/logo.png';
  static const IconData MAIN_SEARCH = const IconData(0xe61c, fontFamily: GSYICons.FONT_FAMILY);
  static const IconData MAIN_DT = const IconData(0xe684, fontFamily: GSYICons.FONT_FAMILY);
  static const IconData MAIN_QS = const IconData(0xe818, fontFamily: GSYICons.FONT_FAMILY);
  static const IconData MAIN_MY = const IconData(0xe6d0, fontFamily: GSYICons.FONT_FAMILY);
  static const String DEFAULT_USER_ICON = 'static/images/logo.png';
  static const IconData LOGIN_USER = const IconData(0xe666, fontFamily: GSYICons.FONT_FAMILY);
  static const IconData LOGIN_PW = const IconData(0xe60e, fontFamily: GSYICons.FONT_FAMILY);
}
