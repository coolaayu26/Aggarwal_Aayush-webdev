/**
 * Created by Aayush Aggarwal on 8/10/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("pageListController", pageListController);

    function pageListController($routeParams,pageService) {
        var model = this;
        model.uid = $routeParams.uid;

        function init() {
            model.pages = pageService.findPageByWebsiteId(model.uid)
        }
        init()
    }
})();