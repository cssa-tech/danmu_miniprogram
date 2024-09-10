// app.js
App({
    onLaunch: function () {
        wx.cloud.init(
            {
                env: "danmu-6g41i88te98a9ba0",
                traceUser: true
            });
    },
    globalData: {
        userInfo: null
    }
})
