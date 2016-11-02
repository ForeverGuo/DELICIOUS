var app=angular.module('myapp',['ng','ngRoute'])
.config(function($routeProvider){
  $routeProvider
  .when('/first',{
      templateUrl :'TPL/first.html',
      controller : 'first'
  })
  .when('/second',{
      templateUrl : 'TPL/second.html',
      controller : 'second',
  })
  .when('/third/:pid',{
      templateUrl : 'TPL/third.html',
      controller : 'third',
  })
  .when('/forth/:tid',{
     templateUrl : 'TPL/forth.html',
     controller :　'forth',
  })
  .when('/five',{
      templateUrl : 'TPL/five.html',
      controller : 'five',
  })
  .when('/six/:mid',{
      templateUrl : 'TPL/six.html',
      controller : 'six',
  })
  .otherwise({
     redirectTo : '/first'
  })
})
  .controller('mycontroller',function($scope,$http,$window,$location){

  })
  .controller('first',function($scope,$window,$location){
      $scope.next=function(){
        $location.path('/second');
      }

  })
  .controller('second',function($scope,$http,$location){
      $http({medth:'get',url:'data/list.json'}).success(function(data){
        $scope.sub=data;
    })
      $scope.loading=function(){
        $http.get('data/list-o.json').success(function(data){
          $scope.sub=$scope.sub.concat(data);
        })
      }
  })
  .controller('third',function($scope,$http,$routeParams){
      $scope.gid=$routeParams.pid;
      $http.get('data/list.json').success(function(data){
          for(var i =0;i<data.length;i++){
            if($scope.gid==data[i].id){
              $scope.gname=data[i].name;
              $scope.gimg=data[i].img;
              $scope.gmaterial=data[i].material;
              $scope.gdetail=data[i].detail;
            }
          }

      });


  })
  .controller('forth',function($scope,$http,$routeParams){
      $scope.yid=$routeParams.tid;
      $http.get('data/list.json').success(function(data){
          for(var i =0;i<data.length;i++){
            if($scope.yid==data[i].id){
              $scope.yname=data[i].name;
              $scope.yimg=data[i].img;
              $scope.ymaterial=data[i].material;
              $scope.ydetail=data[i].detail;
              $scope.yidm=data[i].idm;
            }
          }

      });
      $scope.ding=function(){
          $scope.Switch=false;
      }
  })
  .controller('five',function($scope,$http,$routeParams){
      $scope.load=function(){
        $http.get('data/list -m.json').success(function(data){
          $scope.ming=$scope.ming.concat(data);
        })
      }
      $http({medth:'get',url:'data/list -m.json'}).success(function(data){
        $scope.ming=data;
    })
  })

  .controller('six',function($scope,$http,$routeParams){
        $scope.add=function(){
          /*
            $.ajax({
                type : 'POST',
                url : 'data/list -m.json',
                dataType : 'json',
                success:function(response,status,xhr){

                  ++response[6].number;

                }
            });
          */
        }

        $scope.sid=$routeParams.mid;
        $http.get('data/list -m.json').success(function(data){
            for(var i =0;i<data.length;i++){
              if($scope.sid==data[i].id){
                $scope.sname=data[i].name;
                $scope.simg=data[i].img;
                $scope.smaterial=data[i].material;
                $scope.sdetail=data[i].detail;
                $scope.sidm=data[i].idm;
                $scope.snumber=data[i].number;
              }
            }

        });

        $('.cf').click(function(){
            $('.zan').fadeIn('slow');
        }).mouseout(function(){
            $('.zan').hide();
        });


  })
