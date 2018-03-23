angular.module("UGottaDoIt")
.factory("tasks", ["$http", function($http) {
    var listOfTasks = {
        tasks: []
    };

    listOfTasks.getAll = function() {
        return $http.get('/tasks.json').then(
            function(success) {
                angular.copy(success.data, listOfTasks.tasks);
            }, 
            function(error) {
                console.log(error);
            });
    };

    listOfTasks.create = function(task) {
        return $http.post('/tasks.json', task).then(
            function(success) {
                listOfTasks.tasks.push(success.data);
            }, 
            function(error) {
                console.log(error);
            });
    };

    return listOfTasks;
}])