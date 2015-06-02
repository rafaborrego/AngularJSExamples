(function(){

    /**
     * Service that gets data from GitHub
     */
    var GitHubService = function($http) {

        /**
         * Gets information of a user like the name
         */
        var getUser = function(username) {
            return $http.get("https://api.github.com/users/" + username)
                .then(function(response){
                    return response.data;
                });
        };

        /**
         * Gets the repositories of a user
         */
        var getRepos = function(user) {
            return $http.get(user.repos_url)
                .then(function(response) {
                    return response.data;
                });
        };

        // Make both methods public
        return {
            getUser: getUser,
            getRepos: getRepos
        };
    };

    var module = angular.module("GitHubViewer");
    module.factory("GitHubService", GitHubService);
}());
