// pages/study/study.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    studyBannerUrl: app.globalData.imgUrl +'/study_banner.png',
    studyMenuItems:[
      {
        iconUrl: app.globalData.imgUrl + "/home-eduhome.png",
        title: "微党课"
      },
      {
        iconUrl: app.globalData.imgUrl + "/my-aboutus.png",
        title: "政策法规"
      },
      {
        iconUrl: app.globalData.imgUrl + "/barexahomeon.png",
        title: "资料提交"
      },
      {
        iconUrl: app.globalData.imgUrl + "/home-exahome.png",
        title: "在线考试"
      }
      
    ],
    classItems: [
      {
        classImgUrl: app.globalData.imgUrl + '/news01.png',
        classTitle: '中国共产党第十九次全国代表大会 关于《中国共产党章程（修正案）》的决议'
      },
      {
        classImgUrl: app.globalData.imgUrl + '/news02.png',
        classTitle: '习近平：决胜全面建成小康社会 夺取新时代中国特色社会主义伟大胜利——在中国共产党第十九次全国代表大会上的报告'
      }
    ],
    ruleItems:[
      {
        ruleTitle: '中央明确：事业单位改革有且只有两类',
        ruleTime: '2018-05-03'
      },
      {
        ruleTitle: '把践行入党誓词作为党员的终身必修课',
        ruleTime: '2018-01-12'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})