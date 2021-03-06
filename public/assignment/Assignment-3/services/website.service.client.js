/**
 * Created by Aayush Aggarwal on 8/1/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .service("websiteService", websiteService);
        
        function websiteService() {
            var websites = [
                { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
                { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
                { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
                { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
                { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
                { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
                { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
            ];

            this.findWebsitesForUser = findWebsitesForUser;

            function findWebsitesForUser(uid) {
                var sites = [];

                for(var w in websites){
                    if(websites[w].developerId === uid){
                        sites.push(websites[w])
                    }
                }
                return sites;
            }

        }
})();