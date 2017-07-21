require("./index.scss");

if (process.env.NODE_ENV !== "production") {
    require("./index.html");
}

//活动常用功能包
const tools = require("modules/tools");

import "./entry.jsx";

const mod1 = require("../mod1");
