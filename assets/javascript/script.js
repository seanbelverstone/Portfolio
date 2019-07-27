// Mobile responsive navbar

$(document).ready(function() {
    $('.sidenav').sidenav();
  });



//Text area on contact page
$('#textarea1').val();
M.textareaAutoResize($('#textarea1'));


//Checking that the form is complete
var nameEmailNumber;
var messageVal;


function validateForm() {

  $("input").each(function() {

    if ($(this).val() === '') {
      event.preventDefault();
      M.toast({html: 'An input field is blank'});
      nameEmailNumber = false;

    } else {
      nameEmailNumber = true;
      details.push($(this).val());
    }

  });

  $("textarea").each(function() {
    if ($(this).val() === '') {
      event.preventDefault();
      M.toast({html: 'An input fields is blank'});
      messageVal = false;

    } else {
      messageVal = true;
      message = $(this).val();
    }
  });

};
  
var details = [];
var message;

  $("#submit").on("click", function(event) {
    
    validateForm();
    if (nameEmailNumber && messageVal === true) {
      var email = 'seanbelverstone@gmail.com';

      $(this).attr('href', 'mailto:' + email +
      '?subject=' + details.join(" ") + '&body=' + message);    
    }
    //clears the form after submission
    $("input").val("");
    $("textarea").val("");
    details = [];
  });