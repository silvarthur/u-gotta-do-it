angular.module("UGottaDoIt")
.controller("MainController", ["$scope", "tasks", "$state", function($scope, tasks, $state) {
    $scope.mainHeader = "Welcome!";
    $scope.secondaryHeader = "A wise way to manage your activities and be someone more disciplined!";

    $scope.tasks = tasks.tasks;

    $scope.addTask = function(title, description) {
        $scope.tasks.push({title: title, description: description});
    };

    $scope.removeTask = function(task) {
        var index = $scope.tasks.indexOf(task);
        $scope.tasks.splice(index, 1);
    };

    $scope.goToAboutPage = function() {
        $state.go("about");
    };
}]);