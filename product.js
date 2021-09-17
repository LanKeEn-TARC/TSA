// keyboard products change colour
//keyboard1
function changeSrcKeyboard1() {
  if (document.getElementById("black-keyboard1").checked) {
  document.getElementById("keyboard1-pic").src = "uncut-pic/ducky-black.png";
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
      document.getElementById("keyboard2-pic").src = "uncut-pic/blackwidoweliteQuartz.png";
  }
}

//keyboard3
function changeSrcKeyboard3() {
  if (document.getElementById("black-keyboard3").checked) {
  document.getElementById("keyboard3-pic").src = "uncut-pic/razer-huntman-black.png";
  } 
  else if (document.getElementById("pink-keyboard3").checked) { 
      document.getElementById("keyboard3-pic").src = "uncut-pic/razer-hunter-pink.png";
  }
}

//mouse1
function changeSrcMouse1() {
  if (document.getElementById("black-mouse1").checked) {
  document.getElementById("mouse1-pic").src = "uncut-pic/coolmaster-black.png";
  } 
  else if (document.getElementById("white-mouse1").checked) { 
      document.getElementById("mouse1-pic").src = "uncut-pic/coolmaster-white.png";
  }
}

//console1
function changeSrcConsole1() {
  if (document.getElementById("black-console1").checked) {
  document.getElementById("console1-pic").src = "uncut-pic/ps4-black.png";
  } 
  else if (document.getElementById("white-console1").checked) { 
      document.getElementById("console1-pic").src = "uncut-pic/ps4-white.png";
  }
}

//console2
function changeSrcConsole2() {
  if (document.getElementById("black-console2").checked) {
  document.getElementById("console2-pic").src = "uncut-pic/ps4pro-black.png";
  } 
  else if (document.getElementById("white-console2").checked) { 
      document.getElementById("console2-pic").src = "uncut-pic/ps4-pro-white.png";
  }
}

//console3
function changeSrcConsole3() {
  if (document.getElementById("disc-console3").checked) {
  document.getElementById("console3-pic").src = "uncut-pic/ps5-disc-1.png";
  } 
  else if (document.getElementById("digital-console3").checked) { 
      document.getElementById("console3-pic").src = "uncut-pic/ps5-digital.png";
  }
}

//controller1
function changeSrcController1() {
  if (document.getElementById("black-controller1").checked) {
  document.getElementById("controller1-pic").src = "uncut-pic/dualshock-black.png";
  } 
  else if (document.getElementById("red-controller1").checked) { 
      document.getElementById("controller1-pic").src = "uncut-pic/dualshock-red.png";
  }
}

//controller2
function changeSrcController2() {
  if (document.getElementById("black-controller2").checked) {
  document.getElementById("controller2-pic").src = "uncut-pic/dualsense-black.png";
  } 
  else if (document.getElementById("white-controller2").checked) { 
      document.getElementById("controller2-pic").src = "uncut-pic/dualsense-white.png";
  }
}

//controller3
function changeSrcController3() {
  if (document.getElementById("black-controller3").checked) {
  document.getElementById("controller3-pic").src = "uncut-pic/xbox-black.png";
  } 
  else if (document.getElementById("white-controller3").checked) { 
      document.getElementById("controller3-pic").src = "uncut-pic/xbox-white.png";
  }
}

//headphone2
function changeSrcHeadphone2() {
  if (document.getElementById("black-headphone2").checked) {
  document.getElementById("headphone2-pic").src = "uncut-pic/sony-black.png";
  } 
  else if (document.getElementById("white-headphone2").checked) { 
      document.getElementById("headphone2-pic").src = "uncut-pic/sony-white.png";
  }
}

//chair1
function changeSrcChair1() {
  if (document.getElementById("black-chair1").checked) {
  document.getElementById("chair1-pic").src = "uncut-pic/sakula-chair.png";
  } 
  else if (document.getElementById("red-chair1").checked) { 
      document.getElementById("chair1-pic").src = "uncut-pic/sakula-red.png";
  }
}

function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchBox");
  filter = input.value.toUpperCase();
  ul = document.getElementById("searchList");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}
