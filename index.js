document.getElementsByClassName("stream-container")[0].style.height=window.innerHeight + "px";

document.getElementsByClassName("stream-container")[0].onload = function() {
  document.getElementsByClassName("stream-container")[0].style.height=window.innerHeight + "px";
};

window.onresize = function() {
  document.getElementsByClassName("stream-container")[0].style.height=window.innerHeight + "px";
};