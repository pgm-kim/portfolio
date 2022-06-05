function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

  function onposter() {
    document.getElementById("overlaypp").style.display = "block";
  }
  
  function offposter() {
    document.getElementById("overlaypp").style.display = "none";
  }

  function onproject() {
    document.getElementById("overlayproject").style.display = "block";
  }
  
  function offproject() {
    document.getElementById("overlayproject").style.display = "none";
  }


  function myFunction() {
var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.getElementById("btnprojects");

if (dots.style.display === "none") {
dots.style.display = "inline";
btnText.innerHTML = "show more"; 
moreText.style.display = "none";
} else {
dots.style.display = "none";
btnText.innerHTML = "show less"; 
moreText.style.display = "inline";
}
}