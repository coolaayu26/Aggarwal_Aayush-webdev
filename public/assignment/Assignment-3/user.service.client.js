/**
 * Created by Aayush Aggarwal on 7/28/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("userService", userService);
    
    function userService() {
        var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];

        var api = {
            "findUserByUsernameAndPassword" : findUserByUsernameAndPassword,
            "findUserById" : findUserById
        };
        return api;

        function findUserById(uid) {
            for(var u in users){
                if(users[u]._id === uid){
                    return users[u];
                }
            }
            return null
        }

        function findUserByUsernameAndPassword(username, password) {
                for(var u in users){
                    var _user = users[u];
                    if(_user.username === username && _user.password === password){
                       return _user
                    }
                }
                return null
        }
    }
})();