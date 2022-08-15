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
        title: 'IMPRESSIONNANT!😆',
        text: 'Merci de vous être abonné!',
        icon: 'success',
        button: 'Aww ouii!',
      });
    } else if (inputEmail === '') {
      swal({
        title: 'OUPS!😅',
        text: 'Désolés, une adresse e-mail valide est nécessaire ',
        icon: 'warning',
        button: 'Très bien, on réessaye!',
      });
    } else {
      swal({
        title: 'Ooh!😭',
        text: "Désolés, mais le format de l'adresse électronique n'est pas valide. ",
        icon: 'error',
        button: 'Très bien, on réessaye!',
      });
    }
    // return false;
    event.preventDefault; //  To prevent the page from refreshing
  });
