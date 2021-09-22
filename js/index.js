// add class function
ActiveClass=(classname,btns)=>{
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName(classname);
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" "+classname, "");
    }
    this.className +=" "+ classname;
    });
  }
}

// collapse handler function
collapseHandler=(button)=>{
  var i;
  for (i = 0; i < button.length; i++) {
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
}

// add class for change style navbar title
var projectListHeader = document.getElementById("projecListNavbarTitle");
var projectListItem = projectListHeader.getElementsByClassName("projectList__section__nav__navtabs__item");
ActiveClass("active",projectListItem)

// add class for show navbar content project List
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
collapseHandler(coll);

// add class for show tabs in course structure
var courseStructureHeader = document.getElementById("courseStructureNavbarTitle");
var courseStructureItem = courseStructureHeader.getElementsByClassName("courseStructure__section__nav__navtabs__item");
ActiveClass("active",courseStructureItem)

// add class for show navbar content course structure
var element = document.getElementById("toStratgic");
element.addEventListener("click", function() {
    var pane = document.getElementById("Stratgic");
    pane.classList.add("active");
    var pane = document.getElementById("MangeBase");
    pane.classList.remove("active");
    var pane = document.getElementById("Plannig");
    pane.classList.remove("active");
    var pane = document.getElementById("Product");
    pane.classList.remove("active");
});

var element = document.getElementById("toMangeBase");
element.addEventListener("click", function() {
    var pane = document.getElementById("MangeBase");
    pane.classList.add("active");
    var pane = document.getElementById("Stratgic");
    pane.classList.remove("active");
    var pane = document.getElementById("Plannig");
    pane.classList.remove("active");
    var pane = document.getElementById("Product");
    pane.classList.remove("active");
});

var element = document.getElementById("toPlannig");
element.addEventListener("click", function() {
    var pane = document.getElementById("Plannig");
    pane.classList.add("active");
    var pane = document.getElementById("MangeBase");
    pane.classList.remove("active");
    var pane = document.getElementById("Stratgic");
    pane.classList.remove("active");
    var pane = document.getElementById("Product");
    pane.classList.remove("active");
});

var element = document.getElementById("toProduct");
element.addEventListener("click", function() {
    var pane = document.getElementById("Product");
    pane.classList.add("active");
    var pane = document.getElementById("MangeBase");
    pane.classList.remove("active");
    var pane = document.getElementById("Plannig");
    pane.classList.remove("active");
    var pane = document.getElementById("Stratgic");
    pane.classList.remove("active");
});