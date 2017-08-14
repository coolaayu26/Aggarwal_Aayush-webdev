/**
 * Created by Aayush Aggarwal on 8/10/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("widgetListController",widgetListController);

    function widgetListController($routeParams, widgetService) {
        var model = this;
        model.uid = $routeParams.uid;
        function init() {
            model.hello = "Hello from widget list controller";
            model.widgets = widgetService.findWidgetForUser(model.uid);
        }
        init()
    }
})();