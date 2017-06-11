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
      $form.hide();
      $('.container').append(response);
    })

});


$(".container").on("submit", "#new-horse-form", function(event){
  event.preventDefault();

  var $form = $(this);
  var formData = $form.serialize();

  $.ajax({
    method: $form.attr('method'),
    action: $form.attr('action'),
    data: formData
  })

  $.done(function(responseHTML){
    $('.list').append(responseHTML)
    $('.add-horse-form').remove();
    $('#new-horse-form').show();
  })
})
});
