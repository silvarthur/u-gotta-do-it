/*
This file contains all the details about the app.
*/

/*
var app = angular.module("UGottaDoIt", []);

app.controller("MainController", function($scope) {
    $scope.mainHeader = "Welcome!";
    $scope.secondaryHeader = "A wise way to manage your activities and be someone more disciplined!";

    $scope.tasks = [{title: "Go to the mall.", description:"Buy new clothes and a new pair of shoes."}, 
                    {title: "Call Scarlett Johansson.", description:"Invite her for a dinner at Lindo Olhar."}];

    $scope.addTask = function(title, description) {
        $scope.tasks.push({title: title, description: description});
    };

    $scope.removeTask = function(task) {
        var index = $scope.tasks.indexOf(task);
        $scope.tasks.splice(index, 1);
    };
});
*/

angular.module("UGottaDoIt", ["ui.router"])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state("home", {url:"/home", templateUrl: "/home.html", controller: "MainController"})
    .state("about", {url:"/about", templateUrl: "/about.html", controller: "MainController"});

    $urlRouterProvider.otherwise("home");
}])
.factory('tasks', [function() {
    var listOfTasks = {
        tasks: [{title: "Go to the mall.", description:"Buy new clothes and a new pair of shoes."}, 
        {title: "Call Scarlett Johansson.", description:"Invite her for a dinner at Lindo Olhar."}]
    };

    return listOfTasks;
}])
.controller("MainController", function($scope, tasks, $state) {
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

    $scope.goToHomePage = function() {
        $state.go("home");
    };

    $scope.goToAboutPage = function() {
        $state.go("about");
    };
});