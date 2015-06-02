/**
 * Contains the mappings between the urls and the controllers that will manage them
 */
(function(){

    // The viewer is registered here instead of in the controller and includes the routing dependency
    var app = angular.module("GitHubViewer", ["ngRoute"]);

    app.config(function($routeProvider) {
        $routeProvider
            .when("/search", {
                templateUrl: "search.html",
                controller: "SearchController"
            })
            .when("/user/:username", {
                templateUrl: "user.html",
                controller: "UserController"
            })
            .when("/repo/:username/:reponame", {
                templateUrl: "repo.html",
                controller: "RepoController"
            })
            .otherwise({redirectTo:"/search"});
    });

}());