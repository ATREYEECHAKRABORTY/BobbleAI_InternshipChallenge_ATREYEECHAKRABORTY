  
function front()
{
    var name = document.getElementById("email").value;
    var passwd = document.getElementById("password").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(name =='')
    {
        alert("please enter user name.");
    }
    else if(passwd=='')
    {
        alert("Enter the Password");
    }
    else if(!filter.test(name))
    {
        alert("Enter valid email id.");
    }
    else if(passwd.length < 6 || passwd.length > 6)
    {
        alert("Password min and max length is 6.");
    }
    else
    {
alert('Thank You for LogIN & You are redirecting to Google.com');
window.location = "http://www.google.com";
        }
}