function clicked() {
    
    var user = document.getElementById('username');
    var pass = document.getElementById('password');
    
    var coruser = "a";
    var corpass = "1";
    
    if(user.value == coruser) {
        
    if(pass.value == corpass) {
            
        window.alert("You are successfully logged in " + user.value);
        window.open("data.html");
        
    } else {
           
            window.alert("Incorrect Password!");
        }
        
    } else {
        
        window.alert("Incorrect UserName!");
    }
           
}