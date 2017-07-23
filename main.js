var TodoApp = angular.module('ngTodo',[]);

TodoApp.controller('mainController',function($scope) {
        $scope.TodoList=[{'Title':'Navy form',
                           'Todo':'Submit the Navy form till 31th'},
                           {'Title':'foodieApp',
                           'Todo':'Submit the angular App "FoodieAPP" till 27th'},
                           {'Title':'Electricity Bill',
                           'Todo':'pay 1500rs Electricity bill till 1 Aug'},
                           {'Title':'CodeVita',
                           'Todo':'Take part in CodeVita on Monday'},
                           {'Title':'Party',
                           'Todo':"Attend Ankti's Party 7:30pm"}];
})