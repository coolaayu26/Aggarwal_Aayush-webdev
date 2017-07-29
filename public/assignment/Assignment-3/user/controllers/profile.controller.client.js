/**
 * Created by Aayush Aggarwal on 7/28/2017.
 */
(function () {

    angular
        .module("WebAppMaker")
        .controller("profileController", profileController);

    function profileController($scope, $routeParams, userService) {
        var uid = $routeParams["uid"];
        $scope.user = userService.findUserById(uid);

    }

})();
