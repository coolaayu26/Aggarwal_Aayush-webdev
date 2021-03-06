/**
 * Created by Aayush Aggarwal on 7/31/2017.
 */
(function () {
   angular
       .module("WebAppMaker")
       .controller("registerController", registerController);

        function registerController(userService, $location, $routeParams) {
            var model = this;
            model.registerUser = registerUser;
            function init() {

            }
            init();

            function registerUser(user) {
                var _user = userService.findUserByUsername(user.username);
                if( !_user){
                    if(user.password === user.password2){
                        var user = userService.registerUser(user);
                        $location.url("profile/"+user._id);
                    } else{
                        model.passwordError = "Passwords don't match";
                    }

                }
                else {
                    model.error ="User already exists";
                }
                console.log(user);
            }
        }
})();