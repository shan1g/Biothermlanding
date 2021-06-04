function smoothy() {
  $('a[href*="#"]:not([href="#"])').on('click',function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        setTimeout(function(){
          const yOffset = -213;
          const element = document.getElementById(target);

          window.scrollTo({top: target, behavior: 'smooth'});

        }, 900);
        return false;
      }
    }
  });
}
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("touchstart", function(e) {passive: true} );

  smoothy();

});
