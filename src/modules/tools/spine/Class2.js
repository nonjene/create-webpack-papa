/**
 * Created by Nonjene on 2016/10/5.
 */

var _warn = function(msg){
    if(publicConfig && publicConfig.debug){
        window.console && console.log('WARN: '+msg)
    }

};
var _Class = function (Father,obj) {
    var Class = function (opt) {
        this.init && this.init(opt);
    };
    var typeFather = typeof Father;
    if(typeFather === 'function'){
        Class.prototype = Object.create(Father.prototype);
        Class.prototype.constructor = Class;

    }else if(typeFather === 'object'){
        obj = Father;
    }
    Class.proto = function (obj) {
        Object.keys(obj).forEach(function (name) {
            var _mid = null;

            if (Class.prototype[name]) {
                // init函数不让覆盖
                if(name === 'init'){
                    _mid = Class.prototype[name];
                    Class.prototype.init = function () {
                        _mid.apply(this, arguments);
                        obj[name].apply(this, arguments);
                    }
                } else if (name !== 'constructor' && name !== '__warn') {
                    _warn('method or prop covered:' + name);
                    Class.prototype[name] = obj[name];
                }

            }else{
                Class.prototype[name] = obj[name];
            }


        });

        Class.prototype.__warn = _warn;
        return this;
    };
    obj && Class.proto(obj);

    return Class;
};
module.exports = _Class;
