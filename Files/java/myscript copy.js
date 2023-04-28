// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction2(); scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "5px 10px";
    document.getElementById("navbar").style.borderBottom = "0.5px solid rgb(0,0,0,.25)";
    document.getElementById("navbar").style.backgroundColor = "rgb(255,255,255,1)";
    document.getElementById("unifilogo").src="Files/unifi_nuovo_salomone_3.png";
    document.getElementById("infnlogo").src="Files/LogoPiccolo_3.png";
    var x = document.getElementById("navbar").getElementsByTagName("a");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "black";
        x[i].style.borderColor = "black";
    };
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "5px 10px";
    document.getElementById("navbar").style.borderBottom = "";
    document.getElementById("navbar").style.backgroundColor = "rgb(0,0,0,.5)";
    document.getElementById("unifilogo").src="Files/unifi_nuovo_salomone_3_inv.png";
    document.getElementById("infnlogo").src="Files/LogoPiccolo_3_inv.png";
    var x = document.getElementById("navbar").getElementsByTagName("a");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "white";
        x[i].style.borderColor = "white";
    };
    document.getElementById("logo").style.fontSize = "35px";
  }
}

function scrollFunction2() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar2").style.padding = "5px 10px";
        document.getElementById("navbar2").style.borderBottom = "0.5px solid rgb(0,0,0,.25)";
        document.getElementById("navbar2").style.backgroundColor = "rgb(255,255,255,1)";
        document.getElementById("unifilogo").src="Files/unifi_nuovo_salomone_3.png";
        document.getElementById("infnlogo").src="Files/LogoPiccolo_3.png";
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
        document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("navbar2").style.padding = "5px 10px";
        document.getElementById("navbar2").style.borderBottom = "";
        document.getElementById("navbar2").style.backgroundColor = "rgb(0,0,0,.5)";
        document.getElementById("unifilogo").src="Files/unifi_nuovo_salomone_3_inv.png";
        document.getElementById("infnlogo").src="Files/LogoPiccolo_3_inv.png";
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
        document.getElementById("logo").style.fontSize = "35px";
    }
}
