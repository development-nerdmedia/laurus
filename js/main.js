AOS.init();
jQuery('document').ready(function($){
  var menuBtn = $('.menu-icon');
      menu = $('.navigation ul');
  
  menuBtn.click(function(){
      if(menu.hasClass('show')){
          menu.removeClass('show');
      }else{
          menu.addClass('show');
      }
  });

  var subBTN = $('.SUBMENU');
      submenu = $('.navigation ul ul#asd');

  subBTN.click(function(){
      if(submenu.hasClass('sub')){
        submenu.removeClass('sub');
      }else{
          submenu.addClass('sub');      
      }
  })

  $('main').click(function(){
      if(submenu.hasClass('sub'))
          submenu.removeClass('sub');
  });

  $('.sbm').click(function(){
      if(submenu.hasClass('sub'))
          submenu.removeClass('sub');
  });

  $('.sbm').click(function(){
      if(menu.hasClass('show'))
      menu.removeClass('show');
  });


  /* desple lang */
  var subBTN1 = $('.SUBMENUU');
      submenuu = $('.navigation ul ul#asdf');

  subBTN1.click(function(){
      if(submenuu.hasClass('sub')){
        submenuu.removeClass('sub');
      }else{
        submenuu.addClass('sub');
      }
  })

  $('main').click(function(){
      if(submenuu.hasClass('sub'))
      submenuu.removeClass('sub');
  });

  $('.sbm').click(function(){
      if(submenuu.hasClass('sub'))
      submenuu.removeClass('sub');
  });

  $('.sbm').click(function(){
      if(menu.hasClass('show'))
      menu.removeClass('show');
  });
  
});



/* TOGGLE NAVBAR CONTACT */
var navToggler = document.querySelector(".contacto");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("activo");
    document.querySelector(".seccontactopage").classList.toggle("open");
}

/* close nav when clicking on a nav item */
document.addEventListener("click", function(e){
    if(e.target.closest(".close")){
        toggleNav();
    }
});
/* END MENU MOVIL */

var navToggler = document.querySelector(".contacto2");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("activo");
    document.querySelector(".seccontactopage").classList.toggle("open");
}

var navToggler = document.querySelector(".contacto3");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("activo");
    document.querySelector(".seccontactopage").classList.toggle("open");
}

var navToggler = document.querySelector(".contacto4");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("activo");
    document.querySelector(".seccontactopage").classList.toggle("open");
}

var navToggler = document.querySelector(".contacto5");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("activo");
    document.querySelector(".seccontactopage").classList.toggle("open");
}


/* MENU MOVIL */
var navToggler1 = document.getElementById('menu12');
navToggler1.addEventListener("click", toggleNav1);

function toggleNav1(){
  navToggler1.classList.toggle("activoo");
  document.querySelector(".secmenupage").classList.toggle("openn");
}

/* close nav when clicking on a nav item */
document.addEventListener("click", function(e){
  if(e.target.closest(".closee")){
      toggleNav1();
  }
});

/* CONTACT */

function pintar(col,col1){
  document.getElementById('cuadrado').style.backgroundImage = col;
  document.getElementById('back').style.backgroundImage = col1;
}

function primero(estado){
  document.getElementById('num1').style.display = estado;
  document.getElementById('num2').style.display = 'none';
  document.getElementById('num3').style.display = 'none';
}

function segundo(estado1){
  document.getElementById('num1').style.display = 'none';
  document.getElementById('num3').style.display = 'none';
  document.getElementById('num2').style.display = estado1;
}

function tercero(estado2){
  document.getElementById('num1').style.display = 'none';
  document.getElementById('num2').style.display = 'none';
  document.getElementById('num3').style.display = estado2;
}

function cambiar(color){
  document.getElementById('hexa1').style.fill = color;
  document.getElementById('hexa2').style.fill = '#FFF';
  document.getElementById('hexa3').style.fill = '#FFF';
}

function cambiar1(color1){
  document.getElementById('hexa2').style.fill = color1;
  document.getElementById('hexa1').style.fill = '#FFF';
  document.getElementById('hexa3').style.fill = '#FFF';
}

function cambiar2(color2){
  document.getElementById('hexa3').style.fill = color2;
  document.getElementById('hexa1').style.fill = '#FFF';
  document.getElementById('hexa2').style.fill = '#FFF';
}

function pintar1(col,none,inlinee){
  document.getElementById('cuadrado1').style.backgroundImage = col;
  document.getElementById('123').style.display=none;
  document.getElementById('tarj').style.display=inlinee;
}

function mostrar(inline){
  document.getElementById('123').style.display=inline;
  document.getElementById('tarj').style.display='none';
}

function ocultar(none,inlinee){
  document.getElementById('1234').style.display=none;
  document.getElementById('tarjj').style.display=inlinee;
}

function mostrar1(inline){
  document.getElementById('1234').style.display=inline;
  document.getElementById('tarjj').style.display='none';
}

function ocultar1(none,inlinee){
  document.getElementById('12345').style.display=none;
  document.getElementById('tarjjj').style.display=inlinee;
}

function mostrar2(inline){
  document.getElementById('12345').style.display=inline;
  document.getElementById('tarjjj').style.display='none';
}

/* ACORDEON */

document.querySelectorAll(".question").forEach((question) => question.addEventListener("click", () => {
  if(question.parentNode.classList.contains("active")) {
    question.parentNode.classList.toggle("active")
  } else {
    document.querySelectorAll(".question").forEach(question => question.parentNode.classList.remove("active"))
    question.parentNode.classList.add("active")
  }
}))



