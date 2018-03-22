angular.module("UGottaDoIt", ["ui.router", "templates"])
.controller("AboutController", function($scope, $state) {
    $scope.goToHomePage = function() {
        $state.go("home");
    };
})