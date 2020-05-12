  var myapp=angular.module('myapp', []);
          myapp.controller('accountcontroller' , function($scope){
            
                 function accountcontroller($scope){
                    $scope.submit = function(){
                     $scope.submitted = true;
                    }
                 };
                  $scope.mobnumPattern = /^[0-9]*$/;
                  $scope.username = /^[A-Za-z]+$/;
              })
