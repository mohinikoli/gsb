$(document).ready(function(){
    var elements = $('.modal-overlay, .modal');

    $('.menu-icon').click(function () {
      // alert('hello');
      elements.addClass('active');
    });

    $('.close-modal').click(function () {
      elements.removeClass('active');
    });
});