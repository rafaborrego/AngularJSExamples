// The controllers can not be defined globally since Angular 1.3v, so they have to belong to a module

(function() {

    /** Viewer definition */
    var app = angular.module("GitHubViewer");

    /**
     * Controller definition
     * @param $scope binding for sharing a model with the view
     * @param $http allows to do requests
     */
    var SearchController = function($scope, $http, $log, $routeParams) {

        $scope.search = function() {
            GitHubService.getUser($scope.username).
                then(onUserLoaded, onUserLoadingError);
        };

        $log.info('Loaded SearchController');
    };

    // Register the controller inside the module
    // Add the params $scope and $http so Angular identifies them even if they are renamed by a JS minifier
    app.controller("SearchController", ['$scope', '$http', '$log', '$routeParams', SearchController]);
}());