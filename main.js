var TodoApp = angular.module('ngTodo',[]);

TodoApp.controller('mainController',function($scope) { 
    //localStorage.setItem("TodoLists",null);
    var TodoLists=JSON.parse(localStorage.getItem("TodoLists"));
        if(TodoLists==null)
        {
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
                           localStorage.setItem("TodoLists", JSON.stringify($scope.TodoList)); 
        }
        else{
            $scope.TodoList=TodoLists;
        }
        var Dia;
        $('.add').on('click',function(){
            Dia = document.querySelector('#newToDO');
            Dia.show(); 
            $('.main').addClass('blur');
        })
        $('#close').on('click',function(){
            var title=document.querySelector('#title').value;
            var todo=document.querySelector('#todo').value;
            if(title=="" || todo==""){
                alert("enter both the values");
            }
            else{
                $('.main').removeClass('blur');
                  Dia.close();
                var obj={'Title':title,
                         'Todo':todo};
                  $scope.TodoList.push(obj);
                  localStorage.setItem("TodoLists", JSON.stringify($scope.TodoList));
                  location.reload();
            }
        })
        $('#close1').on('click',function(){
    Dia_dis = document.querySelector('#displays');
    Dia_dis.close();
    $('.main').removeClass('blur');

})
        
        })



function Display(id){
    var TodoLists=JSON.parse(localStorage.getItem("TodoLists"));
            Dia_dis = document.querySelector('#displays');
            console.log(Dia_dis);
            Dia_dis.show();
            $('#para').text(TodoLists[id].Todo); 
            $('.main').addClass('blur');

        }


