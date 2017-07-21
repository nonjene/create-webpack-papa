require("./footer.css");

function renderFooter() {}

module.exports = (function() {
    var promiseLoad = $.Deferred();
    $(window).on("load", promiseLoad.resolve);

    promiseLoad.then(renderFooter);
})();
