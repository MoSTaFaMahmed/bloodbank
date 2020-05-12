function fpCtrl3($scope)
{
    $scope.upUserName = document.getElementById("upUserName");
    $scope.upEmail = document.getElementById("upEmail");
    $scope.upPassword = document.getElementById("upPassword");
    $scope.upMobile = document.getElementById("upMobile");
    $scope.upDOB = document.getElementById("upDOB");
    $scope.upGender = document.getElementById("upGender");
    $scope.upBloodType = document.getElementById("upBloodType");
    $scope.upAddress = document.getElementById("upAddress");

    document.getElementById("signUpBtn").onclick = function(){
        if(typeof(Storage) !== "undefined") {
            if(localStorage.userName == $scope.upUserName.value){
                alert("You are already signed up!");
            }
            else {
                if(check()){

                    localStorage.setItem('upUserName', $scope.upUserName.value);
                    localStorage.setItem("upEmail", $scope.upEmail.value);
                    localStorage.setItem("upPassword", $scope.upPassword.value);
                    localStorage.setItem('upMobile', $scope.upMobile.value);
                    localStorage.setItem('upDOB', $scope.upDOB.value);
                    localStorage.setItem("upGender", $scope.upGender.value);
                    localStorage.setItem("upBloodType", $scope.upBloodType.value);
                    localStorage.setItem("upAddress", $scope.upAddress.value);
                    alert("Successfully Signed Up");
                    window.open("SignInForm.html", '_self');
                }            
            }
        }
    }
    
    function check()
    {
        if($scope.upUserName.value=="" || $scope.upEmail.value=="" || $scope.upPassword.value=="" || $scope.upMobile.value=="" || $scope.upDOB.value=="" || $scope.upAddress.value==""){
            return false;
        } else {
            return true;
        }
    
    }
    var x = document.getElementById("upAddress");  

    document.getElementById("imgLoc").onclick = function(){
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }    
    $scope.mobnumPattern = /^[0-9]*$/;
    $scope.usernamep = /^[A-Za-z]+$/;
    

    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
        
        var locAPI="https://maps.googleapis.com/maps/api/geocode/json?latlng="+position.coords.latitude +","+position.coords.longitude+"&sensor=true";
    // x.innerHTML=locAPI;  <!-- print the locationes-->
        $.get({
            url:locAPI,
            success:function(data)
            {
            console.log(data);    
            x.value=data.results[0].address_components[3].long_name+",";    //country location 
            x.value+=data.results[0].address_components[2].long_name+","; 
            x.value+=data.results[0].address_components[1].long_name+","; 
            x.value+=data.results[0].address_components[0].long_name+"."; 
            }
        });    
    }

        
    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                x.innerHTML = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                x.innerHTML = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML = "An unknown error occurred."
                break;
        }
    }
   
}

angular.module('BBApp').controller('fpCtrl3', fpCtrl3);