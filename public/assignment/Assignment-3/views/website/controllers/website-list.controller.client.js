/**
 * Created by Aayush Aggarwal on 8/1/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("websiteListController",websiteListController);
    
        function websiteListController($routeParams, websiteService) {
            var model = this;
            model.uid = $routeParams.uid;

            function init() {
                model.websites = websiteService.findWebsitesForUser(model.uid);
            }
            init();
        }
})();