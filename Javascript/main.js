
var menubars = document.getElementById("menu-bars");
function openmenu(){
  menubars.style.top = "0px";  
}
function closemenu(){
  menubars.style.top = "-350px";  
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link")
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab")
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var menubaricon = document.getElementById("menu-bar");
function menuborder(){
  menubaricon.style.border="2px solid black";
  menubaricon.style.width ="45px";
  menubaricon.style.padding ="5px";
}
function menuborderless(){
  menubaricon.style.border="";
  menubaricon.style.width ="35px";
  menubaricon.style.padding ="";
}
