$(document).ready(function(){
    var elements = $('.modal-overlay, .modal');

    $('.menu-icon').click(function () {
      // alert('hello');
      elements.addClass('active');
    });

    $('.close-modal').click(function () {
      elements.removeClass('active');
    });
<<<<<<< HEAD
       $('#example').DataTable();

=======
>>>>>>> 5c5e53dbc925bc91fe4cb38e9167a89c8502bf51
});