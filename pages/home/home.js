//index.js
//获取应用实例
const app = getApp()

// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })

Page({
  data: {
    current: 'homepage',
    "usingComponents": {
      "i-row": "../../dist/row/index",
      "i-col": "../../dist/col/index"
    },
    imgUrls: [
      app.globalData.imgUrl+'/banner01.jpg',
      app.globalData.imgUrl+'/banner02.jpg'
    ],
    menuItems: [
      {
        iconUrl: app.globalData.imgUrl +"/bararthomeon.png",
        title:"组工动态"
      },
      {
        iconUrl:app.globalData.imgUrl+"/home-notice.png",
        title:"通知公告"
      },
      {
        iconUrl: app.globalData.imgUrl +"/home-intrank.png",
        title:'党员风采'
      },
      {
        iconUrl: app.globalData.imgUrl +"/home-bbshome.png",
        title:"支部论坛"
      },
      {
        iconUrl: app.globalData.imgUrl +"/home-expense.png",
        title:"党费缴纳"
      },
      {
        iconUrl: app.globalData.imgUrl +"/home-exahome.png",
        title:"在线考试"
      },
      {
        iconUrl: app.globalData.imgUrl +"/home-eduhome.png",
        title:"微党课"
      },
      {
        iconUrl: app.globalData.imgUrl +"/barexahomeon.png",
        title:"资料提交"
      },
      {
        iconUrl: app.globalData.imgUrl +"/my-aboutus.png",
        title:"政策法规"
      },
      {
        iconUrl: app.globalData.imgUrl +"/home-mybranch.png",
        title:"更多"
      }
    ],
    newsItems:[
      {
        newsImgUrl: app.globalData.imgUrl +'/news01.png',
        newsTitle:'开展“两学一做”教育，争做合格党员',
        newsTime:'2019-02-01'
      },
      {
        newsImgUrl: app.globalData.imgUrl + '/news02.png',
        newsTitle: '弘扬雷锋精神，推动社会主义核心价值体系建设',
        newsTime: '2019-02-05'
      }
    ]
  },

  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
  }
});
