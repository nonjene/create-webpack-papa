window._publicConfig=function(o){var e;return e=(o.okPapa.page.isPC,{}),{version:"1.0.0",mock:[],mockReplace:{},commonParams:e,mode:"produce",debug:!1,root:"/",absRoot:o.location.protocol+"//"+o.location.host+"/",protocol:"//",host:{}}}(window),function(o,e){o.okPapa=o.okPapa||{},o.okPapa.browser={},o.okPapa.page=/\/m(\/|$)/.test(location.pathname)||/p=m/.test(location.search)?{isMob:!0,isPC:!1}:{isMob:!1,isPC:!0},o.okPapa.browser.versions.mobile&&o.okPapa.page.isPC&&!/p=pc_only/.test(location.search)&&(location.href=location.href.replace(/(https*:\/\/)www/,"$1m").replace(/\/pc(\/|$)/,"/m$1")),o.okPapa.page.isMob&&o.addEventListener("load",function(){var o=e.documentElement.clientHeight;e.body.offsetHeight<o&&(e.body.style.height=o+"px")})}(window,document),function(o,e){if(!e.okPapa.page.isPC){var t=o.documentElement,a=Math.min(e.devicePixelRatio,3),n="orientationchange"in e?"orientationchange":"resize";t.dataset.dpr=a;var i=function(){var o=t.clientWidth;o>750&&(o=750),t.style.fontSize=100*o/750+"px"};i(),o.addEventListener&&e.addEventListener(n,i)}}(document,window);