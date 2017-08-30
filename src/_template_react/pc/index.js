if (process.env.NODE_ENV !== "production") {
    require("./index.html");
}

require("./index.scss");

//例子
const tpl = require("./main.handlebars");
const tplData = {
    img: {
        example: require("modules/img/example.jpg")
    }
};

$("#container").append(tpl(tplData));