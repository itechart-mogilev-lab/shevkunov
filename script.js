function myFunction() {
  var x = document.getElementsByClassName("main-navigation__row");
  if (x[0].className === "main-navigation__row") {
    x[0].className += " main-navigation__row__responsive";
  } else {
    x[0].className = "main-navigation__row";
  }
}