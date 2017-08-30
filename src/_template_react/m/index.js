require("./index.scss");

if (process.env.NODE_ENV !== "production") {
    require("./index.html");
}

//常用功能包
const tools = require("modules/tools");

import "./entry.jsx";

