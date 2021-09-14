// for animation
function reveal () {
  // get all elements with the class name grid-container
  var revealElements = document.querySelectorAll('.content-container');

  // to run the loop for the number of the element with the class name grid-container
  for (var i = 0; i < revealElements.length; i++) {
    // get the height of the browser's window
    var windowHeight = window.innerHeight;
    // get the element's box top position
    // getBoundingClientRect() is to get size and position relative to the viewport while .top gets its top position
    var elementTop = revealElements[i].getBoundingClientRect().top;
    // if the relative top position of the element is lesser than the window height then it means the element's position is currently in the display
    // else it means that it isn't in the displaying area
    if (elementTop < windowHeight) {
      // the pre-styled class is added to the elements
      revealElements[i].classList.add('animActive');
    } else {
      // the pre-styled class is removed from the elements
      revealElements[i].classList.remove('animActive');
    }
  }
}

// function revealDesc () {
//   var descBox = document.querySelectorAll('faqQuestions')
//
//   for (var i = 0; i < descBox.length; i++) {
//     descBox[i].addEventListener('click', function () {
//       this.classList.toggle('faqQuestions-show')
//     })
//   }
// }

// to show the div for controller desc
function controllerDescReveal () {
  document.getElementById('controllerFaq').classList.toggle('faqQuestions-show');
}

window.addEventListener('scroll', reveal);

// to display the item questions div
var accordion = document.querySelectorAll('.item-btn');

for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function() {
    this.classList.toggle('.item-questionsActive');

    var showQues = this.nextElementSibling;
    if (showQues.style.display === 'block') {
      showQues.style.display = 'none';
    } else {
      showQues.style.display = 'block';
    }
 });
}
