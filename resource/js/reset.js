// 设置body的最小高度为可视区的高度
(function(win, doc) {
    let _agent;

    win.okPapa = win.okPapa || {};
    win.okPapa.browser = {
        getAgent: function() {
            const u = navigator.userAgent,
                app = navigator.appVersion;
            _agent = _agent || {
                //移动终端浏览器版本信息
                trident: !!~u.indexOf("Trident"), //IE内核
                webKit: !!~u.indexOf("AppleWebKit"), //苹果、谷歌内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: !!(~u.indexOf("Android") || ~u.indexOf("Linux")), //android终端或uc浏览器
                iPhone: !!~u.indexOf("iPhone"), //是否为iPhone或者QQHD浏览器
                iPad: !!~u.indexOf("iPad"), //是否iPad
                webApp: !~u.indexOf("Safari") //是否web应用程序，没有头部与底部
            };
            return agent;
        },
        isWeiXin: function() {
            var self = this;
            var ua = navigator.userAgent.toLowerCase();
            return self.versions.mobile && ua.match(/MicroMessenger/i) == "micromessenger";
        },
        isIos: function() {
            var ua = navigator.userAgent.toLowerCase();
            return /iphone|ipad|ipod/.test(ua);
        },
        isApp: function() {
            return false;
        },
        isAndroid: function() {
            var ua = navigator.userAgent.toLowerCase();
            return /android/.test(ua);
        }
    };
    // 辨别是否为移动端的规则，2中1即可：
    // 1.路径必须包含/m/或是/m$
    // 2.参数是p=m
    win.okPapa.page =
        /\/m(\/|$)/.test(location.pathname) || /p=m/.test(location.search)
            ? { isMob: true, isPC: false }
            : { isMob: false, isPC: true };

    // 移动设备的pc页面 转跳到移动端页面
    if (win.okPapa.browser.versions.mobile && win.okPapa.page.isPC && !/p=pc_only/.test(location.search)) {
        location.href = location.href.replace(/(https*:\/\/)www/, "$1m").replace(/\/pc(\/|$)/, "/m$1");
    }

    if (win.okPapa.page.isMob) {
        win.addEventListener("load", function() {
            var docHeight = doc.documentElement.clientHeight;
            var bodyHeight = doc.body.offsetHeight;
            if (bodyHeight < docHeight) {
                doc.body.style.height = docHeight + "px";
            }
        });
    }
})(window, document);

/**
 * 加一个load资源的方法
 */
(function(win) {
    win.okPapa.loadResouse = function(type, src, callback) {
        var s;
        if (type === "js") {
            s = document.createElement("script");
            s.src = src;
            s.async = true;
        } else if (type === "css") {
            s = document.createElement("link");
            s.type = "text/css";
            s.rel = "stylesheet";
            s.href = src;
        } else {
            return;
        }
        if (callback) {
            s.onreadystatechange = s.onload = function() {
                var state = s.readyState;
                if (!callback.done && (!state || /loaded|complete/.test(state))) {
                    callback.done = true;
                    callback();
                }
            };
        }

        document.getElementsByTagName("head")[0].appendChild(s);
        return this;
    };
})(window);

// 常用函数定义
// 类似alert的全局函数
// 类似console.log的全局函数
// 等
