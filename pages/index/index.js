//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    routers: [
      {
        name: '闹钟',
        url: '/pages/Course/course',
        code: '10'
      },
      {
        name: '计步器',
        url: '/pages/Course/course',
        icon: '/image/python_ico.png',
        code: '11'
      },
      {
        name: '记事本',
        url: '/pages/Course/course',
        icon: '/image/java_ico.png',
        code: '10'
      },
      {
        name: '小游戏',
        icon: '/image/python_ico.png',
        code: '11'
      },
      {
        name: '看图',
        url: '/pages/Course/course',
        icon: '/image/java_ico.png',
        code: '10'
      },
      {
        name: 'TODO',
        icon: '/image/python_ico.png',
        code: '11'
      },
      {
        name: 'TODO',
        url: '/pages/Course/course',
        icon: '/image/java_ico.png',
        code: '10'
      },
      {
        name: 'TODO',
        icon: '/image/python_ico.png',
        code: '11'
      },
      {
        name: 'TODO',
        url: '/pages/Course/course',
        icon: '/image/java_ico.png',
        code: '10',
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  }
})  
