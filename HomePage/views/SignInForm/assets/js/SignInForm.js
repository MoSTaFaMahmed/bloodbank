
angular.module('BBApp', ['ngRoute']);

angular.module('BBApp').config(function ($routeProvider) {

    $routeProvider.when('/', {
        controller: 'siCtrl',
        templateUrl: 's.html'
    });

    $routeProvider.when('/forgetpassword', {
        controller: 'fpCtrl',
        templateUrl: 's2.html'
    })

    $routeProvider.when('/Signup', {
        controller: 'fpCtrl3',
        templateUrl: 's3.html'
    })


    $routeProvider.otherwise({ redirectTo: '/' })



})

