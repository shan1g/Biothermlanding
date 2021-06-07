// modal functions
if ($(".modal-trigger").length >= 1){
  $('.modal-trigger').on( 'click', function() {
    setTimeout(function(){
      var element = document.getElementById('mainModal');
      element.classList.add('active');

      let closeBtn = document.getElementById('close-modal-btn');
      closeBtn.addEventListener('click', modalRemove);
      $('#frameVideo').each(function(){
        this.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
      });

    }, 200);
  });
}

function modalRemove() {
  var mainElement = document.getElementById('modalHolder');
  var element = document.getElementById('mainModal');
  var overlay = document.getElementById('mainOverlay');
  //$('#frameVideo').stopVideo();
  $('#frameVideo').each(function(){
    this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
  });
  if (overlay != null){
    overlay.classList.remove('active');
  }
  element.classList.remove('active');

}

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
