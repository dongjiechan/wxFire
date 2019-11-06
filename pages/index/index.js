//index.js
//获取应用实例
const app = getApp()
const onFire = require('../../utils/onfire.js')

Page({
  data: {
    num: 1,
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (e) {
    onFire.on('EventChange',e=>{
      this.setData({
        num: e
      })
    })
  },
  jump(e){
    wx.navigateTo({
      url: '../detail/detail?num=' + this.data.num,
    })
  },
  onUnload: function () {
    // 取消事件绑定
    onfire.un("EventChange");
  }
})
