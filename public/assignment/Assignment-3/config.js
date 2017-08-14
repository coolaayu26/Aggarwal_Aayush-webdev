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
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })

            .when("/",{
                templateUrl: "views/home/home.view.client.html",
                controller: "homeController",
                controllerAs: "model"
            })

            .when("/register",{
                templateUrl: "views/user/templates/Register.view.client.html",
                controller: "registerController",
                controllerAs: "model"
            })
            .when("/profile/:uid",{
                templateUrl: "views/user/templates/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model"
            })

            .when("/user/:uid/website",{
                templateUrl: "views/website/templates/Website-list.view.client.html",
                controller: "websiteListController",
                controllerAs: "model"
            })

            .when("/user/:uid/website/new",{
                templateUrl: "views/website/templates/Website-new.view.client.html",
                controller: "websiteNewController",
                controllerAs: "model"
            })

            .when("/user/:uid/website/:wid/page",{
                templateUrl:"views/page/templates/page-list.view.client.html",
                controller:"pageListController",
                controllerAs: "model"
            })

            .when("/user/:uid/website/:wid/page/:pid/widget",{
                templateUrl:"views/widget/templates/Widget-list.view.client.html",
                controller: "widgetListController",
                controllerAs: "model"
            })

    }
    // var users = [
    //     {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    //     {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    //     {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    //     {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    // ];

})();
