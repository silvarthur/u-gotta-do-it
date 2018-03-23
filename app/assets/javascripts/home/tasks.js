angular.module("UGottaDoIt")
.factory("tasks", ["$http", function($http) {
    var listOfTasks = {
        tasks: []
    };

    listOfTasks.getAll = function() {
        return $http.get('/tasks.json').then(
            function(response) {
                angular.copy(response.data, listOfTasks.tasks);
            }, 
            function(error) {
                console.log(error);
            });
    };

    listOfTasks.show = function(task) {
        return $http.get('/tasks/' + task.id + '.json').then(
            function(response) {
                console.log(response.data);
            }, 
            function(error) {
                console.log(error);
            })
    }

    listOfTasks.create = function(task) {
        return $http.post('/tasks.json', task).then(
            function(response) {
                listOfTasks.tasks.push(response.data);
            }, 
            function(error) {
                console.log(error);
            });
    };

    listOfTasks.destroy = function(task) {
        return $http.delete('/tasks/' + task.id + '.json').then(
            function(response) {
                console.log('List of Tasks:', listOfTasks.tasks);
            }, 
            function(error) {
                console.log(error);
            });
    }

    return listOfTasks;
}])