angular.module("UGottaDoIt", ["ui.router", "templates"])
.factory('tasks', [function() {
    var listOfTasks = {
        tasks: [{title: "Go to the mall.", description:"Buy new clothes and a new pair of shoes."}, 
        {title: "Call Scarlett Johansson.", description:"Invite her for a dinner at Lindo Olhar."}]
    };

    return listOfTasks;
}])