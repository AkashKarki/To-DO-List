var TodoApp = angular.module('ngTodo',[]);

TodoApp.controller('mainController',function($scope) { 
    //localStorage.setItem("TodoLists",null);
    var TodoLists;
    try{
    TodoLists=JSON.parse(localStorage.getItem("TodoLists"));
  }
  catch(error){
        if(TodoLists.length==0||TodoLists==undefined||TodoLists==null)
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
                           console.log(TodoLists);
                           localStorage.setItem("TodoLists", JSON.stringify($scope.TodoList)); 
        }
      }
            $scope.TodoList=TodoLists;

        var Dia;
        $('.addBut').on('click',function(){
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


function Delete(id)
{
    var TodoLists=JSON.parse(localStorage.getItem("TodoLists"));
    id=id.charAt(id.length-1);
    TodoLists.splice(id, 1);
    localStorage.setItem("TodoLists", JSON.stringify(TodoLists));
    location.reload();
}

function Display(id){
    var TodoLists=JSON.parse(localStorage.getItem("TodoLists"));
            Dia_dis = document.querySelector('#displays');
            Dia_dis.show();
            $('#para').text(TodoLists[id].Todo); 
            $('.main').addClass('blur');

        }





