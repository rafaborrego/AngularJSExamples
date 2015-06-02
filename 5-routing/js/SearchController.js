// The controllers can not be defined globally since Angular 1.3v, so they have to belong to a module

(function() {

    /** Viewer definition */
    var app = angular.module("GitHubViewer");

    /**
     * Controller definition for managing the search form actions
     *
     * @param $scope binding for sharing a model with the view
     * @param $logs logs messages on the console
     * @param $location redirects to other screens
     */
    var SearchController = function($scope, $log, $location) {

        /**
         * Redirects to the screen where is displayed the user's data
         */
        $scope.search = function() {
            $location.path("/user/" + $scope.username);
        };

        $log.info('Loaded SearchController');
    };

    // Register the controller inside the module
    // Add params like $scope so Angular identifies them even if they are renamed by a JS minifier
    app.controller("SearchController", ['$scope', '$log', '$location', SearchController]);
}());
