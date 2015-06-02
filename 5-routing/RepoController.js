// The controllers can not be defined globally since Angular 1.3v, so they have to belong to a module

(function() {

    /** Viewer usage */
    var app = angular.module("GitHubViewer");

    /**
     * Controller definition
     * @param $scope binding for sharing a model with the view
     * @param $http allows to do requests
     */
    var RepoController = function($scope, $log, $routeParams, GitHubService) {

        $log.info('Loaded RepoController');
    };

    // Register the controller inside the module
    // Add the params $scope and $http so Angular identifies them even if they are renamed by a JS minifier
    app.controller("RepoController", ['$scope', '$log', '$routeParams', 'GitHubService', RepoController]);
}());