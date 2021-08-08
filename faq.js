window.addEventListener('scroll', reveal)

function reveal () {
  var revealElements = document.querySelectorAll('.grid-container')

  for (var i = 0; i < revealElements.length; i++) {
    var windowTop = window.innerHeight
    var elementTop = revealElements[i].getBoundingClientRect().top

    if (elementTop < windowTop) {
      revealElements[i].classList.add('animActive')
    } else {
      revealElements[i].classList.remove('animActive')
    }
  }
}
