window.onload = function(){
    var inUserName = document.getElementById("userName");
    var inPassword = document.getElementById("password");
    document.getElementById("signIn").onclick = function(){
        if(typeof(Storage) !== "undefined") {
            if(localStorage.userName){
                if(check()) {
                    if(localStorage.userName == inUserName.value && localStorage.password == inPassword.value)
                        alert("Successfully Signed In");
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
        if(inUserName.value=="") {
            
            document.getElementById("userSpan").innerHTML="*";
            document.getElementById("userSpan").style.color="red";
        } else {
            document.getElementById("userSpan").innerText="";
        }
        if(inPassword.value=="") {
            
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