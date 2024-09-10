// index.js
Page({
    data: {
        msg: ''
    },
    onTapSubmit: function (e) {
        const db = wx.cloud.database({env: "danmu-6g41i88te98a9ba0"});
        const danmu = db.collection("danmu");
        danmu.add({
            data: {
                msg_content: this.data.msg
            },
            //成功之后的提示
            success: function (res) {
                wx.showModal({content: "发送成功"});
            },
        });
        this.setData({msg:''});
    }
    
})
