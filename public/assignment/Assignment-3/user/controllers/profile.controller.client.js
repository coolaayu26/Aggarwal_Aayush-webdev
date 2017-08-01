/**
 * Created by Aayush Aggarwal on 7/28/2017.
 */
(function () {

    angular
        .module("WebAppMaker")
        .controller("profileController", profileController);

    function profileController($routeParams, userService) {
        var model = this;
        var uid = $routeParams["uid"];
        model.updateUser = updateUser;
        model.unregister = unregister;

        function init() {
            model.user = userService.findUserById(uid);
        }
        init();

        function updateUser() {

        }

        function unregister() {

        }


    }

})();
