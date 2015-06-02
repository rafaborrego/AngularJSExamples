/**
 * Contains the mappings between the urls and the controllers that will manage them
 */
(function(){

    // The viewer is registered here instead of in the controller and includes the routing dependency
    var app = angular.module("GitHubViewer", ["ngRoute"]);

    // Specify the controller and the html for each url, and the default one
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
            .otherwise({redirectTo:"/search"});
    });
}());
