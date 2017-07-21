/**
 * Created by Nonjene on 2016/10/5.
 */

var Class = require('./Class2');
var Event = require('./Event');

var Widget = {
    create: function (Father,obj) {
        if(!obj){
            obj = Father;
            Father = Event;
        }
        var _Class = new Class(Father, obj);
        this._list.push(_Class);
        return _Class;
    },
    _list:[]
};
module.exports = Widget;