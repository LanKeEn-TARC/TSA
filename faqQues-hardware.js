//to display ques and ans div onclick
var active = document.querySelectorAll('.expand');

//get the url
var currentUrl = window.location.href;
var openBlock = currentUrl.split("#")[1];
console.log(document.querySelector('#' + openBlock));


if (openBlock != null && openBlock != undefined) {
    document.querySelector('#' + openBlock).style.display = 'block';
}


for (var i = 0; i < active.length; i++) {
    active[i].addEventListener('click', function() {
        this.classList.toggle('.active');

        var showDes = this.nextElementSibling;

        if (showDes.style.display === 'block') {
            showDes.style.display = 'none';
        } else {
            showDes.style.display = 'block';
        }

    })
}


//extend accordion when the link is clicked
var consoleLink = document.getElementById('consoleHeadLink');
var consoleSection = document.getElementById('consoleSec');

function consoleSecShow() {
    consoleSection.style.display = 'block';
}

var mouseHeadLink = document.getElementById('mouseHeadLink');
var mouseSection = document.getElementById('mouseSec');

function mouseSecShow() {
    mouseSection.style.display = 'block';
}

var headsetHeadLink = document.getElementById('headsetHeadLink');
var headsetSection = document.getElementById('headsetSec');

function headsetSecShow() {
    headsetSection.style.display = 'block';
}

var controllerHeadLink = document.getElementById('controllerHeadLink');
var controllerSection = document.getElementById('controllerSec');

function controllerSecShow() {
    controllerSection.style.display = 'block';
}

var keyboardHeadLink = document.getElementById('keyboardHeadLink');
var keyboardSection = document.getElementById('keyboardSec');

function keyboardSecShow() {
    keyboardSection.style.display = 'block';
}
