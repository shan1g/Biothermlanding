// modal functions
if ($(".modal-trigger").length >= 1){
  $('.modal-trigger').on( 'click', function() {
    let modalID = $(this).attr('data-modal');
    modalSet(modalID);
  });
}
function modalSet(id) {
  let modalData;
  fetch("components/" + id + ".html")
    .then(response => response.text())
    .then(
      text => {

        $("#modalHolder").append(text);
        console.log(text);
        setTimeout(function(){
          var element = document.getElementById('mainModal');
          element.classList.add('active');

          let closeBtn = document.getElementById('close-modal-btn');
          closeBtn.addEventListener('click', modalRemove);

          let dropDownHolder, dropDownItems;
          // incase need to load functional after
          switch (id) {
            case "find-a-plan":
              dropDownHolder = $('.select-holder');
              dropDownItems = dropDownHolder.find('.selected');
              dropDownItems.on('click', function(e){
                let currentdropDown = $(this);
                if ($(this).parent().hasClass('active')) {
                  $(this).parent().removeClass('active');
                }
                else {
                  dropDownHolder.removeClass('active');
                  $(this).parent().addClass('active');
                }

                $(this).siblings().find('.option').on('click', function(e){
                  currentdropDown.addClass('active');
                  currentdropDown.html($(this).html());
                  dropDownHolder.removeClass('active');
                });

              });
              break;
            case "login":
              $('#loginCheck').on('click',function(){
                let loginType = $('#loginSelect input:checked').attr('id');
                if (loginType != null || loginType != '' || loginType != undefined){
                  window.location.href=loginType + '.php';
                }
              });
              break;
            case "search":
              dropDownHolder = $('.select-holder');
              dropDownItems = dropDownHolder.find('.selected');
              dropDownItems.on('click', function(e){
                let currentdropDown = $(this);
                let categoryTypes = currentdropDown.siblings().find('input:checked').length;
                if ($(this).parent().hasClass('active')) {
                  $(this).parent().removeClass('active');
                  currentdropDown.html(categoryTypes);
                  dropDownHolder.addClass('selected');
                  if(categoryTypes == 0) {
                    currentdropDown.html('All');
                    document.getElementById('all').checked = true;
                  }
                }
                else {
                  dropDownHolder.removeClass('active');
                  $(this).parent().addClass('active');
                  currentdropDown.html(categoryTypes);
                }

                $('.best-check').on('click', function(e){
                  $(this).addClass('checked');
                  if(!$(this).hasClass('default')) {
                    document.getElementById('all').checked = false;
                    //$('#all').removeAttr('checked');
                  }
                });


              });
              $('#searchBtn').on('click', function(e){
                let searchVal = $('#searchDetail').val();
                let href = 'search-page.php';
                window.location.href=href + '?search=' + searchVal;
              });
              break;
          }

        }, 200);


      }
    );
}
function modalRemove() {
  var mainElement = document.getElementById('modalHolder');
  var element = document.getElementById('mainModal');
  var overlay = document.getElementById('mainOverlay');
  if (overlay != null){
    overlay.classList.remove('active');
  }
  element.classList.remove('active');


  setTimeout(function(){
    mainElement.innerHTML = '';
  }, 800);

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
