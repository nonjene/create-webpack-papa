if (process.env.NODE_ENV !== "production") {
    require("./index.html");
}

require("./index.scss");

//活动常用功能包
const tools = require("modules/tools");
const mod1 = require("../mod1");

//分享功能
require("modules/m/share")({
    link: "", //location.protocol + '//' + location.host + '',//分享地址，必须是绝对网址
    title: "",
    desc: "", // 分享描述
    imgUrl: "" //location.href.replace(/\/m(\/.*|$)/, '/') + require('./img/share.png').replace('../img', 'img') // 分享图标，必须是绝对网址
}).loginedShare(
    null,
    function(scode, link) {
        console.log("成功初始化");
    },
    function() {
        console.log("没有登录");
    },
    function() {
        // 用户登录了而且 操作了分享成功后的回调（目前仅限微信分享，app无）：
    }
);

//例子
const tpl = require("./main.handlebars");
const tplData = {
    img: {
        example: require("modules/img/example.jpg")
    }
};

$("#container").append(tpl(tplData));
