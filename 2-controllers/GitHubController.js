// The controllers can not be defined globally since Angular 1.3v, so they have to belong to a module
(function() {

    /** Viewer definition */
    var app = angular.module("GitHubViewer", []);

    /**
    * Controller definition
    * @param $scope binding for sharing a model with the view
    * @param $http allows to do requests
    */
    var GitHubController = function($scope, $http) {

        /** Adds a sample DTO to the form model */
        var getUserDataStatic = function() {
            var userStatic = {
                name: 'Rafael Borrego',
                imageUrl: 'https://avatars1.githubusercontent.com/u/3040956?v=3&s=460'
            };

            $scope.userStatic = userStatic;
        };

        /** Converts the data that receives from GitHub to a DTO and adds it to the form model */
        var onUserLoaded = function (response) {
            var userDynamic = {
                name: response.data.name,
                imageUrl: response.data.avatar_url
            };

            $scope.userDynamic = userDynamic;
        };

        /** Handler for user loading errors */
        var onUserLoadingError = function (reason) {
            $scope.error = 'Could not fetch the user , reason: ' + reason.statusText;
        };

        /** Gets data of a GitHub user by username */
        var getUserDataDynamic = function() {
            $http.get('https://api.github.com/users/rafaborrego').
                then(onUserLoaded, onUserLoadingError);
        };

        getUserDataStatic();
        getUserDataDynamic();

        console.log('Loaded GitHubController');
    };

    // Register the controller inside the module
    // Add the params $scope and $http so Angular identifies them even if they are renamed by a JS minifier
    app.controller("GitHubController", ['$scope', '$http', GitHubController]);
}());