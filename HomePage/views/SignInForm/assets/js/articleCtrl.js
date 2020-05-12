function siCtrl($scope)
{
    $scope.inUserName = document.getElementById("userName");
    $scope.inPassword = document.getElementById("password");
    document.getElementById("signIn").onclick = function(){
        if(typeof(Storage) !== "undefined") {

            if(localStorage.upUserName){
                if(check()) {
                    if(localStorage.upUserName == $scope.inUserName.value && localStorage.upPassword == $scope.inPassword.value){
                        alert("Successfully Signed In");
                        window.open('../profile/profile.html','_self');
                    }
                    else
                        alert("User Name or Password is not correct!");
                }
            }
            else {
                if(check()){
                    alert("Not Exist, Please Sign up first");
                    document.getElementById('toSignUp').setAttribute('href', '#!Signup')
                    
            }
        }
    }
}
    function check()
    {
        if($scope.inUserName.value=="") {
            
            document.getElementById("userSpan").innerHTML="*";
            document.getElementById("userSpan").style.color="red";
        } else {
            document.getElementById("userSpan").innerText="";
        }
        if($scope.inPassword.value=="") {
            
            document.getElementById("passwordSpan").innerText="*";
            document.getElementById("passwordSpan").style.color="red";
        } else {
            document.getElementById("passwordSpan").innerText="";
        }
        if(document.getElementById("userName").value=="" || document.getElementById("password").value==""){
            return false;
        } else {
            return true;
        }
    
    }


}

angular.module('BBApp').controller('siCtrl', siCtrl);