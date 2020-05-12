function ctr1($scope) {
	$scope.item={name:localStorage.upUserName ,email:localStorage.upEmail,address:localStorage.upAddress,phone:localStorage.upMobile}
    
}
angular.module('profile').controller('ctr1', ctr1);