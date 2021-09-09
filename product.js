// keyboard products change colour
//keyboard1
function changeSrcKeyboard1() {
  if (document.getElementById("black-keyboard1").checked) {
  document.getElementById("keyboard1-pic").src = "uncut-pic/ducky-black.jfif";
  } 
  else if (document.getElementById("white-keyboard1").checked) { 
      document.getElementById("keyboard1-pic").src = "uncut-pic/ducky-white.jfif";
  }
}

//keyboard2
function changeSrcKeyboard2() {
  if (document.getElementById("black-keyboard2").checked) {
  document.getElementById("keyboard2-pic").src = "uncut-pic/razerblackwidowEliteBlack.png";
  } 
  else if (document.getElementById("pink-keyboard2").checked) { 
      document.getElementById("keyboard2-pic").src = "uncut-pic/blackwidoweliteQuartz.jpg";
  }
}

//keyboard3
function changeSrcKeyboard3() {
  if (document.getElementById("black-keyboard3").checked) {
  document.getElementById("keyboard3-pic").src = "uncut-pic/razer-huntman-black.jfif";
  } 
  else if (document.getElementById("pink-keyboard3").checked) { 
      document.getElementById("keyboard3-pic").src = "uncut-pic/razer-hunter-pink.png";
  }
}

//mouse1
function changeSrcMouse1() {
  if (document.getElementById("black-mouse1").checked) {
  document.getElementById("mouse1-pic").src = "uncut-pic/coolmaster-black.jfif";
  } 
  else if (document.getElementById("white-mouse1").checked) { 
      document.getElementById("mouse1-pic").src = "uncut-pic/coolmaster-white.jfif";
  }
}

//console1
function changeSrcConsole1() {
  if (document.getElementById("black-console1").checked) {
  document.getElementById("console1-pic").src = "uncut-pic/ps4-black.jpg";
  } 
  else if (document.getElementById("white-console1").checked) { 
      document.getElementById("console1-pic").src = "uncut-pic/ps4-white.jfif";
  }
}

//console2
function changeSrcConsole2() {
  if (document.getElementById("black-console2").checked) {
  document.getElementById("console2-pic").src = "uncut-pic/ps4pro-black.jfif";
  } 
  else if (document.getElementById("white-console2").checked) { 
      document.getElementById("console2-pic").src = "uncut-pic/ps4-pro-white.webp";
  }
}

//console3
function changeSrcConsole3() {
  if (document.getElementById("disc-console3").checked) {
  document.getElementById("console3-pic").src = "uncut-pic/ps5-disc.jpg";
  } 
  else if (document.getElementById("digital-console3").checked) { 
      document.getElementById("console3-pic").src = "uncut-pic/ps5-digital.jfif";
  }
}

//controller1
function changeSrcController1() {
  if (document.getElementById("black-controller1").checked) {
  document.getElementById("controller1-pic").src = "uncut-pic/dualshock-black.jfif";
  } 
  else if (document.getElementById("red-controller1").checked) { 
      document.getElementById("controller1-pic").src = "uncut-pic/dualshock-red.jfif";
  }
}

//controller2
function changeSrcController2() {
  if (document.getElementById("black-controller2").checked) {
  document.getElementById("controller2-pic").src = "uncut-pic/dualsense-black.jpg";
  } 
  else if (document.getElementById("white-controller2").checked) { 
      document.getElementById("controller2-pic").src = "uncut-pic/dualsense-white.jfif";
  }
}

//controller3
function changeSrcController3() {
  if (document.getElementById("black-controller3").checked) {
  document.getElementById("controller3-pic").src = "uncut-pic/xbox-black.jfif";
  } 
  else if (document.getElementById("white-controller3").checked) { 
      document.getElementById("controller3-pic").src = "uncut-pic/xbox-white.jpg";
  }
}

//headphone2
function changeSrcHeadphone2() {
  if (document.getElementById("black-headphone2").checked) {
  document.getElementById("headphone2-pic").src = "uncut-pic/sony-black.jfif";
  } 
  else if (document.getElementById("white-headphone2").checked) { 
      document.getElementById("headphone2-pic").src = "uncut-pic/sony-white.jpg";
  }
}

//chair1
function changeSrcChair1() {
  if (document.getElementById("black-chair1").checked) {
  document.getElementById("chair1-pic").src = "uncut-pic/sakula-chair.jfif";
  } 
  else if (document.getElementById("red-chair1").checked) { 
      document.getElementById("chair1-pic").src = "uncut-pic/sakula-red.webp";
  }
}


//product modal box
// Get the modal
var modal =  document.getElementsByClassName('button');
var btn = document.getElementsByClassName("myBtn");
var span = document.getElementsByClassName("close");

btn[0].onclick = function() {
  modal[0].style.display = "block";
}

btn[1].onclick = function() {
  modal[1].style.display = "block";
}

btn[2].onclick = function() {
  modal[2].style.display = "block";
}

btn[3].onclick = function() {
  modal[3].style.display = "block";
}

btn[4].onclick = function() {
  modal[4].style.display = "block";
}

btn[5].onclick = function() {
  modal[5].style.display = "block";
}

span[0].onclick = function() {
  modal[0].style.display = "none";
}

span[1].onclick = function() {
  modal[1].style.display = "none";
}

span[2].onclick = function() {
  modal[2].style.display = "none";
}

span[3].onclick = function() {
  modal[3].style.display = "none";
}
span[4].onclick = function() {
  modal[4].style.display = "none";
}

span[5].onclick = function() {
  modal[5].style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
  if (event.target == modal[1]) {
      modal[1].style.display = "none";
  }  
  if (event.target == modal[2]) {
    modal[2].style.display = "none";
  }
  if (event.target == modal[3]) {
    modal[3].style.display = "none";
  }  
  if (event.target == modal[4]) {
    modal[4].style.display = "none";
  }  
  if (event.target == modal[5]) {
    modal[5].style.display = "none";
  }  
}
