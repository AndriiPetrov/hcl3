var source =document.getElementById("source");

source.addEventListener("dragstart", function(evt){
    this.style.border="3px dotted #000";

    evt.dataTransfer.effectAllowed = "move";

    evt.dataTransfer.setData("Text", this.id);
}, false);

source.addEventListener("dragend", function(evt){
    this.style.border="";
}, false);

var target = document.getElementById("target");

target.addEventListener("dragenter", function(evt){
    this.style.border="3px solid red";
}, false);

target.addEventListener("dragleave", function(evt){
    this.style.border = "";
}, false);

target.addEventListener("dragover", function(evt){
    if(evt.preventDefault) evt.preventDefault();
    return false;
},false);

target.addEventListener("drop" ,function(evt){
    if(evt.preventDefault) evt.preventDefault();
    if(evt.stopPropagation) evt.stopPropagation();

    this.style.border = "";
    var id = evt.dataTransfer.getData("Text");

    var elem = document.getElementById(id);
    this.appendChild(elem);

    return false;
}, false);