var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



function openmenu(){
    var sideme = document.getElementById("sidemenu");
    sideme.style.right = "20px";
}
function closemenu(){
    var sideme = document.getElementById("sidemenu");
    sideme.style.right = "-200px";
}