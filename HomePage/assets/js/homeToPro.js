window.onload = function(){
    if(localStorage.upUserName) {
        this.document.getElementById('homeSigninLink').innerHTML = localStorage.upUserName;
        this.document.getElementById('homeSigninLink').setAttribute('href', 'views/profile/profile.html')
        this.document.getElementById('donateBtn').setAttribute('href', 'views/profile/profile.html')
        
    }
}