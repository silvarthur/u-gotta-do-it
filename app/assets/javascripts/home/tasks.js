angular.module("UGottaDoIt")
.factory("tasks", ["$http", function($http) {
    var listOfTasks = {
        tasks: []
    };

    listOfTasks.getAll = function() {
        return $http.get('/tasks.json').then(
            function(response) {
                console.log('Data:', response.data);
                angular.copy(response.data, listOfTasks.tasks);
            }, 
            function(error) {
                console.log(error);
            });
    };

    listOfTasks.create = function(task) {
        return $http.post('/tasks.json', task).then(
            function(response) {
                listOfTasks.tasks.push(response.data);
            }, 
            function(error) {
                console.log(error);
            });
    };

    return listOfTasks;
}])