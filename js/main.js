
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("touchstart", function(e) {passive: true} );

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

});
