window.addEventListener('scroll', reveal);
  
function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;
    // var rp2 = 300;
    // var revealbottom = reveals[i].getBoundingClientRect().bottom;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    // else if(revealbottom > windowheight - rp2){
    //     reveals[i].classList.add('active');
    // }
    else{
      reveals[i].classList.remove('active');
    }
  }
}