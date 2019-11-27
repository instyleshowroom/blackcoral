new WOW().init();
const observer = lozad();
observer.observe();
var rellax = new Rellax('.rellax');
window.addEventListener("load", function(){
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#ffffff",
        "text": "#000000",
      },
      "button": {
        "background": "#ffffff",
        "text": "#000000"
      }
    },
    "content": {
      "message": "Questo sito utilizza cookie tecnici per facilitare la navigazione, cookie di analytics per raccogliere dati in forma aggregata, e cookie di terze parti per poter offrire ulteriori servizi e funzionalità agli utenti. Cliccando sull’apposito pulsante, chiudendo questo banner, scorrendo questa pagina, cliccando su un link o proseguendo la navigazione in altra maniera, acconsenti all’uso dei cookie. Se vuoi saperne di più o negare il consenso a tutti o ad alcuni cookie,",
      "dismiss": "<span style='text-decoration: underline;'>Acconsento</span>",
      "link": "consulta la cookie policy",
      "href": "/privacy.html"
    }
  });
});

$(document).ready(function() {
  $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".mobile-nav").toggleClass("is-active");
  });
});

$('.navbar-item.ss19').hide();
  $('.navbar-item.fw19').hide();

  $('.collections-link').hover(
    function () {
      $('.navbar-item.ss19').fadeIn(300);
      $('.navbar-item.fw19').fadeIn(300);
      $('.collections-link').css('height','84px');
    },
    function () {
      $('.navbar-item.ss19').fadeOut(300);
      $('.navbar-item.fw19').fadeOut(300);
      $('.collections-link').css('height','auto'), 300;
    }
  );





