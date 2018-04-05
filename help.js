var image = document.getElementsByTagName("img");
var input = document.getElementsByClassName("SDkEP");
var use = document.getElementById("CToSde");

var div = document.querySelector("div");
var divs = document.querySelectorAll("div");

use.getAttribute("id");
use.setAttribute("class", "new");

use.style.background = "blue";

use.className = "newnew";
use.classList;

use.classList.add("class1");
use.classList.remove("new");
use.classList.toggle("new");
use.parentElement;
use.children;

var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function() {
	console.log("CLICK!!!!");
});

var button = document.getElementsByTagName("button")[0];

button.addEventListener("mouseenter", function() {
	console.log("CLICK!!!!");
});

var button = document.getElementsByTagName("button")[0];

button.addEventListener("mouseleave", function() {
	console.log("CLICK!!!!");
});