// add class for change style navbar title
var header = document.getElementById("navbarTitle");
var btns = header.getElementsByClassName("projectList__section__nav__navtabs__item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}

// add class for show navbar content
var element = document.getElementById("toActiveProject");
element.addEventListener("click", function() {
    var pane = document.getElementById("activeProject");
    pane.classList.add("active");
    var pane = document.getElementById("doingProject");
    pane.classList.remove("active");
    var pane = document.getElementById("doneProject");
    pane.classList.remove("active");
});

var element = document.getElementById("toDoingProject");
element.addEventListener("click", function() {
    var pane = document.getElementById("activeProject");
    pane.classList.remove("active");
    var pane = document.getElementById("doingProject");
    pane.classList.add("active");
    var pane = document.getElementById("doneProject");
    pane.classList.remove("active");
});

var element = document.getElementById("toDoneProject");
element.addEventListener("click", function() {
    var pane = document.getElementById("activeProject");
    pane.classList.remove("active");
    var pane = document.getElementById("doingProject");
    pane.classList.remove("active");
    var pane = document.getElementById("doneProject");
    pane.classList.add("active");
});

// change style for show collapse of doingProject
var coll = document.getElementsByClassName("card__header");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.parentElement.classList.toggle("open");
    var content = this.nextElementSibling;
    if (content.classList.contains("show")){
      content.classList.remove("show");
    } else {
      content.classList.add("show");
    } 
  });
}