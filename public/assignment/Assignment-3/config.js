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
                templateUrl: "login.html"
            })

            .when("/",{
                templateUrl: "login.html"
            })

            .when("/register",{
                templateUrl: "register.html"
            })
            .when("/profile/:uid",{
                templateUrl: "profile.html"
            })

            .when("/profile/:uid/website-list",{
                templateUrl: "website-list.html"
            })
    }
    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ];

})();
