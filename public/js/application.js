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


$(".container").on("submit", "#add-horse-form", function(event){
  event.preventDefault();

  var $form = $(this);
  var method = $form.attr("method");
  var action = $form.attr("action");
  var formData = $form.serialize();

  $.ajax({
    method: method,
    action: action,
    data: formData
  })

  $.done(function(responseHTML){
    $('horse-list').append(responseHTML)
    $('.add-a-horse').hide();
    $('#add-horse-form').show();
  })
})
});
