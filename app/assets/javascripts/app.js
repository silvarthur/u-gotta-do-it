angular.module("UGottaDoIt", ["ui.router", "templates"])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state("home", {
        url:"/home", 
        templateUrl: "home/_home.html", 
        controller: "MainController", 
        resolve: {
            taskPromise: ["tasks", function(tasks) {
                return tasks.getAll();
            }]
        }})
    .state("about", {
        url:"/about", 
        templateUrl: "about/_about.html", 
        controller: "AboutController"});

    $urlRouterProvider.otherwise("/home");
}]);