window.onload = function(){
    var upUserName = document.getElementById("upUserName");
    var upEmail = document.getElementById("upEmail");
    var upPassword = document.getElementById("upPassword");
    var upMobile = document.getElementById("upMobile");
    var upDOB = document.getElementById("upDOB");
    var upAddress = document.getElementById("upAddress");
    document.getElementById("signUpBtn").onclick = function(){
        if(typeof(Storage) !== "undefined") {
            if(localStorage.userName == upUserName.value){
                alert("You are already signed up!");
            }
            else {
                if(check()){
                    localStorage.setItem('upUserName', upUserName.value);
                    localStorage.setItem("upPassword", upPassword.value);
                    alert("Successfully Signed Up");
                    window.open("s3.html");
                }            
            }
        }
    }

    function check()
    {
        if(upUserName.value=="" || upEmail.value=="" || upPassword.value=="" || upMobile.value=="" || upDOB.value=="" || upAddress.value==""){
            return false;
        } else {
            return true;
        }
    
    }
}