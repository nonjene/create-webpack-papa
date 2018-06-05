// 为了监听修改
if (process.env.NODE_ENV !== "production") {
    require("./index.html");
}

require("./index.scss");

//活动常用功能包
const tools = require("modules/tools");