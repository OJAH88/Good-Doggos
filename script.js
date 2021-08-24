window.onclick = myFunction;

function myFunction() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
  
  document.getElementById("text").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("text").innerHTML = "I SAID DO NOT TOUCH MY DOGS!";
}
}



