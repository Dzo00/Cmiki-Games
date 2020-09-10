window.onload = function(){
  $(document).ready(function(){
    $('.carousel').carousel();
  });
  
   $("#btnLog").click(proveraLog);
   $("#btnReg").click(proverRegister);
  
  //RESPONSIVE CSS
  $(window).resize(PromeniCSSPoVeliciniEkrana);
  PromeniCSSPoVeliciniEkrana();
}

//RESPONSIVE CSS FUNKCIJA
function PromeniCSSPoVeliciniEkrana(){
  console.log(screen.width);
  if(screen.width<776)
  {
    $('#a-img').removeClass("col");
  }
  else
  {
    $('#a-img').addClass("col");
  }
}

//LOGOVANJE
function proveraLog(e){
    e.preventDefault();
    
    var email, pass;
    email = document.getElementById("emailLog").value;
    pass= document.getElementById("pass").value;
    let success=false;
    if(!rePassword.test(pass) || pass==""){
        $("#pass").css("border-color","#ee0f0f");
    }
    else{
        $("#pass").css("border-color","#08b108");
        
    }
    if(!reEmail.test(email)){
        $("#emailLog").css("border-color","#ee0f0f").attr("placeholder","eg. john@gmail.com");
    }
    else{
        $("#emailLog").css("border-color","#08b108");
        success=true;
    }
    if(success){
        window.location.href = "https://dzo00.github.io/Cmiki-Games/index.html";
    }
}

//REGISTRACIJA
function proverRegister(e){
    e.preventDefault();
    
    var ime, reIme, email, password;
    ime= document.getElementById("name").value;
    
    email = document.getElementById("emailReg").value;
    password= document.getElementById("password").value;
    passCheck= document.getElementById("passwordRepeat").value;
    console.log(password); console.log(passCheck);
    reIme=/^[A-Z][a-z]{2,12}(\s[A-z][a-z]{2,12})+$/;

    let success1=true;

    if(!reIme.test(ime)){
        $("#name").css("border-color","#ee0f0f").attr("placeholder","eg. John Doe");
        success1= false;
    }
    else{
        $("#name").css("border-color","#08b108");
    }
    if(!rePassword.test(password) || password==""){
        $("#password").css("border-color","#ee0f0f");
        success1= false;
    }
    else{
        $("#password").css("border-color","#08b108").next().text(" ");
    }
    if(!reEmail.test(email)){
        $("#emailReg").css("border-color","#ee0f0f").attr("placeholder","eg. john@gmail.com");
        success1= false;
    }
    else{
        $("#emailReg").css("border-color","#08b108");
    }
    if(!rePassword.test(passCheck) && passCheck==""){
        $("#passwordRepeat").css("border-color","#ee0f0f");
        success1= false;
    }
    else if(passCheck!=password){
        $("#passwordRepeat").css("border-color","#ee0f0f");
        success1= false;
    }
    else{
        $("#passwordRepeat").css("border-color","#08b108");
    }
    if(success1){
        window.location.href = "https://dzo00.github.io/Cmiki-Games/index.html";
    }  
}
