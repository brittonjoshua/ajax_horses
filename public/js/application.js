$(document).ready(function() {

$("#add-horse-form").on("submit", function(event){
  event.preventDefault();
  // alert('what?')

    var $form = $(this);


    $.ajax({
      method: $form.attr('method'),
      url: $form.attr('action'),
    })

     .done(function(response) {
      $('.container').append(response);
      $form.hide();
    })

});
});

$(".container").on("submit", "#add-horse-form" )
