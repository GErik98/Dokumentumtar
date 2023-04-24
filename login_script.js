function validalas(){
  var username = document.getElementById("userName").value;
  var password = document.getElementById("userPassword").value;
  var usernameReg = /^[a-zA-Z0-9]+$/;
  var passwordReg = /^[a-zA-Z0-9]+$/;
  

  if (username == ""){
    alert("A felhasználónév mező nem maradhat üresen!");
  }

  else if (password == "")
  {
    alert("A jelszó mező nem maradhat üresen!");
  }

  else if(username == window.localStorage.getItem('lsUsername') && password == window.localStorage.getItem('lsPassword')){
    window.location.replace("index.html");
    return false;
  }
    
}

