angular.module("UGottaDoIt")
.controller("AboutController", ["$scope", "$state", function($scope, $state) {
    $scope.goToHomePage = function() {
        $state.go("home");
     }
}]);