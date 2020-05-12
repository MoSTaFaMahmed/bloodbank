var myapp=angular.module('myapp', []);
myapp.controller('accountcontroller' , function($scope){
    var x = document.getElementById("demo");
    $scope.mobnumPattern = /^[0-9]*$/;
    $scope.usernamep = /^[A-Za-z]+$/;

    document.getElementById("reqImgLoc").onclick = function(){
        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }


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
            x.value+=data.results[0].address_components[0].long_name+",";
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
       
    function check()
    {
        if(document.getElementById('user').value=="" || document.getElementById('mobile').value=="" || document.getElementById('InputNumberOfBag').value=="" || document.getElementById('demo').value==""){
            return false;
        } else {
            return true;
        }
    
    }

    document.getElementById('sendReqBtn').onclick = function(){
        if(check()) {
            alert('Your request is successfully sent')           
        }
        
    }

    if(localStorage.upUserName) {
        document.getElementById('reqToProLink').innerHTML = localStorage.upUserName;
        document.getElementById('reqToProLink').setAttribute('href', '../profile/profile.html')
     
        
    }

            

});
 


