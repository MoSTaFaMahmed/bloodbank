angular.module('profile',['ngRoute']);
angular.module('profile').config(function ($routeProvider){ 
    
    $routeProvider.when('/', {
        controller: 'ctr1',
        templateUrl: 'views/information.html'
});
                                     
    $routeProvider.when('/information', {
        controller: 'ctr1',
        templateUrl: 'views/information.html'
});
$routeProvider.when('/notfication', {
    controller: 'ctr2',
    templateUrl: 'views/notfication.html'
});
$routeProvider.when('/check', {
    controller: 'ctr3',
    templateUrl: 'views/check.html'
});
$routeProvider.when('/help', {
    controller: 'ctr3',
    templateUrl: 'views/help.html'
});


})
window.onload = function() {
    document.getElementById('profileUsername').innerHTML = localStorage.upUserName;
}
//.innerHTML=localStorage.upUserName;