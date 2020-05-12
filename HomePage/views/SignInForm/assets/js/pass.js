function enter()
{
 var x=document.getElementById("mail").value
    var re=new RegExp("^\\w+(\\w+)*([._-]\\w+)*@\\w+([-_.]\\w+)*\\.\\w+([.-]\\w+)*$")
    if(x.match(re) )
        {
            alert('Your reset code is sent to your e-mail')
           
        }
    else{document.getElementById("m").innerHTML="Please enter a valid e-mail";}
}


function refclick() {
  

        alert("fsdf");
        $(this).attr("href","");
    
}
