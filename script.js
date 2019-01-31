function myFunction() {
  var x = document.getElementsByClassName("main-navigation__row");
  if (x[0].className === "main-navigation__row") {
    x[0].className += " main-navigation__row__responsive";
  } else {
    x[0].className = "main-navigation__row";
  }
}
(function() {

  window.addEventListener("resize", resizeThrottler, false);

  var resizeTimeout;
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        actualResizeHandler();
       }, 66);
    }
  }

  function actualResizeHandler(){
    var x = document.getElementsByClassName("main-navigation__row");
      if (x[0].className === "main-navigation__row main-navigation__row__responsive") {
        x[0].className = "main-navigation__row";  
      } 
  }
}());