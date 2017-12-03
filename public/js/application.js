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
       $("#add-horse-button").hide();
      $('.list').append(response);
    })

});


$(".container").on("submit", "#new-horse-form", function(event){
  event.preventDefault();
  // alert('new horse');

  var $form = $(this);
  var formData = $form.serialize();

  $.ajax({
    method: $form.attr('method'),
    action: $form.attr('action'),
    data: formData
  })

  .done(function(responseHTML){
    $('.list').append(responseHTML)
    $form.remove();
    $('#add-horse-button').show();
  })
  .fail(function(errorResponse){
    alert(errorResponse.responseText)
  })
});

$(".list-item").on("click", "a", function(event){
  event.preventDefault();
  console.log('stop that horse')

  var $link = $(this);
  console.log($link)
  var $url = $(this).attr("href");

  $.ajax({
      url: $url,
      method: 'GET'

  })

  .done(function(response){
      console.log(response);
      $('.horse-details').remove();
      $link.parent().append(response);
  })


})
});
