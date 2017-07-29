/**
 * Created by Aayush Aggarwal on 7/28/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/login",{
                templateUrl: "user/templates/login.view.client.html"
            })

            .when("/",{
                templateUrl: "user/templates/login.view.client.html"
            })

            .when("/register",{
                templateUrl: "user/templates/Register.view.client.html"
            })
            .when("/profile/:uid",{
                templateUrl: "user/templates/profile.view.client.html"
            })

    }
    // var users = [
    //     {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    //     {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    //     {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    //     {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    // ];

})();
