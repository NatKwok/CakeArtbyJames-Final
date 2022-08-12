// Subscribe function:

let inputContent = document.getElementById('clickSubscribe').innerText;

document
  .getElementById('clickSubscribe')
  .addEventListener('click', function () {
    if (inputContent.length > 0) {
      alert('Thank you for your subscribe!');
    } else {
      alert("Sorry, we don't have your email yet");
    }
  });

// if (inputContent.length > 0) {
//   alert('Thank you for your subscribe!');
// }
