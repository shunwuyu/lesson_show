'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    isShow: false
  },
  starShow: function starShow() {
    this.setData({
      isShow: true
    });
  }
});