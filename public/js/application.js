$(document).ready(function() {
  $("#new-horse-form").on("submit", function(event){
    event.preventDefault();
    // make ajax request to submit form data
    // destination and method need to come from the form itself to minimize hardcoding/"brittle" code
    var $horseForm = $(this);
    var horseDeets = $horseForm.serialize();
    console.log(horseDeets);
    console.log(typeof horseDeets);
    $.ajax({
      url: $horseForm.attr("action"),
      method: $horseForm.attr("method"),
      data: horseDeets
    })
    .done(function(response){
      console.log("Success!!!");
      console.log(response);
    })
    .fail(function(response){
      $horseForm.before(response.responseText);
    })
  })
});
