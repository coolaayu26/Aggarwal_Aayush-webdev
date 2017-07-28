/**
 * Created by Aayush Aggarwal on 7/28/2017.
 */
(function () {

    angular
        .module("WebAppMaker")
        .controller("profileController", profileController);

    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ];

    function profileController($scope, $routeParams) {
        var uid = $routeParams.uid;
        for(u in users){
            if(users[u]._id === uid){
                $scope.user = users[u];
            }
        }
    }

})();
