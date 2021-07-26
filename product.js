function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "sticky") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}