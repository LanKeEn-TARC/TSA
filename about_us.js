
var modal =  document.getElementsByClassName('button');
var btn = document.getElementsByClassName("myBtn");
var span = document.getElementsByClassName("close");

function locationB() {
  modal[0].style.display = "block";
}
function promisesB() {
  modal[1].style.display = "block";
}

function  tncB(){
  modal[2].style.display = "block";
}

function introB(){
  modal[3].style.display = "block";
}

function productB(){
  modal[4].style.display = "block";
}

function socialB() {
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



