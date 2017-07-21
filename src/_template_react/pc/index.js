if (process.env.NODE_ENV !== "production") {
    require("./index.html");
}

require("./index.scss");

//头部
const Header = require("modules/widget/pc/header/header");
new Header(999);
//底部
require("modules/widget/pc/footer/footer");

//活动常用功能包
const tools = require("modules/tools");

const mod1 = require("../mod1");

//例子
const tpl = require("./main.handlebars");
const tplData = {
    img: {
        example: require("modules/img/example.jpg")
    }
};

$("#container").append(tpl(tplData));
