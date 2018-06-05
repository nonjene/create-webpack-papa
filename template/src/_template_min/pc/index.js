// 为了监听修改
if (process.env.NODE_ENV !== "production") {
    require("./index.html");
}

require("./index.scss");
const hb = require("../tpl.handlebars");
const img1 = require('modules/img/example.jpg');
document.getElementById('example2').innerHTML = hb({})
