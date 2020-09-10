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
  console.log(window.innerWidth);
  if(window.innerWidth<776)
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
    var success=true;
    if(success){
        window.location.href = "https://dzo00.github.io/Cmiki-Games/index.html";
    }
}

//REGISTRACIJA
function proverRegister(e){
    e.preventDefault();
    let success1=true;
    if(success1){
        window.location.href = "https://dzo00.github.io/Cmiki-Games/index.html";
    }  
}
