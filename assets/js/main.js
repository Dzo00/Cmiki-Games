window.onload = function(){
  $(document).ready(function(){
    $('.carousel').carousel();
  });
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
