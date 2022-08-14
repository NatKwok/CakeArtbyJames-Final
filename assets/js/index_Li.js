'use strict';

// Email Subscribe section:

// First, set a function to validate Email:
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

// Then, use event handling to trigger the following things:
const emailSubscribe = document
  .getElementById('clickSubscribe')
  .addEventListener('click', function () {
    // initialize inputContent - this is the user's email input value:

    let inputEmail = document.getElementById('emailInputByUser').value;

    if (validateEmail(inputEmail)) {
      swal({
        title: 'AWESOME!😆',
        text: 'Thank you for subscribing!',
        icon: 'success',
        button: 'Aww yiss!',
      });
    } else if (inputEmail === '') {
      swal({
        title: 'OOPS!😅',
        text: "Sorry, we don't have your email yet ",
        icon: 'warning',
        button: "Let's try it again!",
      });
    } else {
      swal({
        title: 'Ooh!😭',
        text: "Sorry, that's a wrong email format ",
        icon: 'error',
        button: "Let's try it again!",
      });
    }
    // return false;
    event.preventDefault; //  To prevent the page from refreshing
  });
