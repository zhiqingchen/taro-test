export default {
  pages: [
    /* 还款 */
    'pages/repayment/index',
    /* 首页 */
    'pages/index/index',
    /* 我的 */
    'pages/my/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    backgroundColor: '#fafafa',
    borderStyle: 'white',
    selectedColor: '#AB956D',
    color: '#666',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: './static/images/home.png',
        selectedIconPath: './static/images/home-selected.png',
        text: '首页'
      },
      {
        pagePath: 'pages/repayment/index',
        iconPath: './static/images/huankuan.png',
        selectedIconPath: './static/images/huankuan-selected.png',
        text: '还款'
      },
      {
        pagePath: 'pages/my/index',
        iconPath: './static/images/my.png',
        selectedIconPath: './static/images/my-selected.png',
        text: '我的'
      }
    ]
  }
};
