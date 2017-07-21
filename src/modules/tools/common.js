// 公共对象
function commom() {
    if (commom.unique) {
        // 启用单例模式，保证实例为同一个
        return commom.unique;
    }
    commom.unique = this;
    this.__alert = null;
    this.init();
}

commom.prototype = {
    // 修正constructor
    constructor: commom,
    // 初始化
    init: function() {},
    // 调试模式数据输出
    log: function(msg) {},
    // 弹出提示信息
    alert: function() {}
};

module.exports = new commom();
