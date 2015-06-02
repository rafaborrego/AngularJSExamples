// The controllers can not be defined globally since Angular 1.3v, so they have to belong to a module

(function() {

    /** Viewer usage */
    var app = angular.module("GitHubViewer");

    /**
     * Controller definition for displaying data of a user
     *
     * @param $scope binding for sharing a model with the view
     * @param log writes log messages on the console
     * @param $routeParams gets parameters from the url
     * @param GitHubService gets data from GitHub
     */
    var UserController = function($scope, $log, $routeParams, GitHubService) {

        /** Handler for repositories loading errors */
        var onReposLoadingError = function (reason) {
            $scope.error = 'Could not fetch the repositories , reason: ' + reason.statusText;
        };

        /** Handler for user loading errors */
        var onUserLoadingError = function (reason) {
            $scope.error = 'Could not fetch the user , reason: ' + reason.statusText;
        };

        /** Adds the user's repos to the form model */
        var onReposLoaded = function (data) {
            $scope.repositories = data;
        };

        /** Converts the data that receives from GitHub to a DTO, adds it to the form model and gets the user's repos */
        var onUserLoaded = function (data) {
            var user = {
                name: data.name,
                imageUrl: data.avatar_url
            };

            $scope.user = user;

            GitHubService.getRepos(data).
                then(onReposLoaded, onReposLoadingError);
        };

        // Get the user information when the controller is accessed
        GitHubService.getUser($routeParams.username).then(onUserLoaded, onUserLoadingError);

        $log.info('Loaded UserController');
    };

    // Register the controller inside the module
    // Add params like $scope so Angular identifies them even if they are renamed by a JS minifier
    app.controller("UserController", ['$scope', '$log', '$routeParams', 'GitHubService', UserController]);
}());
