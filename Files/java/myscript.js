/*$(document).ready(function(){
    $("#header").load("header_en.html");
});*/

function set_menu_active(cls) {
    var x = document.getElementsByClassName(cls);
  var i, arr;
    for (i = 0; i < x.length; i++) {
        arr = x[i].className.split(" ");
        if (arr.indexOf("active") == -1) {
            x[i].className += " active";
        }
    };
}

function set_lang_link(link) {
    document.getElementById("lang_en").href = "../en/" + link;
    document.getElementById("lang_it").href = "../it/" + link;
}

window.onload = function() {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
                                 this.classList.toggle("active");
                                 var content = this.nextElementSibling;
                                 if (content.style.maxHeight){
                                 content.style.maxHeight = null;
                                 } else {
                                 content.style.maxHeight = content.scrollHeight + "px";
                                 }
                                 });
    }
};

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "5px 10px";
        document.getElementById("navbar").style.borderBottom = "0.5px solid rgba(0,0,0,.25)";
        document.getElementById("navbar").style.backgroundColor = "rgba(255,255,255,1)";
        document.getElementById("unifilogo").src="../Files/unifi_nuovo_salomone_3.png";
        document.getElementById("infnlogo").src="../Files/LogoPiccolo_3.png";
        var x = document.getElementsByTagName("ham-element");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "black";
        };
        var x = document.getElementsByClassName("menu-elem");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.color = "black";
            x[i].style.borderColor = "black";
        };
        document.getElementsByClassName("lang-name")[0].style.color = "black";
        document.getElementsByClassName("lang-arrow")[0].style.color = "black";
    } else {
        document.getElementById("navbar").style.padding = "5px 10px";
        document.getElementById("navbar").style.borderBottom = "";
        document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,.5)";
        document.getElementById("unifilogo").src="../Files/unifi_nuovo_salomone_3_inv.png";
        document.getElementById("infnlogo").src="../Files/LogoPiccolo_3_inv.png";
        var x = document.getElementsByTagName("ham-element");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "white";
        };
        var x = document.getElementsByClassName("menu-elem");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.color = "white";
            x[i].style.borderColor = "white";
        };
        document.getElementsByClassName("lang-name")[0].style.color = "white";
        document.getElementsByClassName("lang-arrow")[0].style.color = "white";
    }
}

