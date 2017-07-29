/**
 * Created by Aayush Aggarwal on 7/28/2017.
 */
(function () {

    angular
        .module("WebAppMaker")
        .controller("loginController",loginController);

    function loginController ($scope,$location,userService) {
        $scope.login = function (user) {
            var user = userService.findUserByUsernameAndPassword(user.username,user.password);
            if(user == null){
                $scope.errorMessage = "User not found";
            } else {
                $location.url("profile/"+user._id);
            }
        }
    }
})();