// NAVBAR

window.onscroll = () => {
  const nav = document.getElementById("navbar");
  if (this.scrollY <= 10) nav.className = "";
  else nav.className = "scroll";
};

// BOUTON SCROLL

$(document).ready(function() {
  $(".js-scrollTo").on("click", function() {
    // Au clic sur un élément
    var page = $(this).attr("href"); // Page cible
    var speed = 1500; // Durée de l'animation (en ms)
    $("html, body").animate({ scrollTop: $(page).offset().top }, speed); // Go
    return false;
  });
});
function rouge_simple() {
  document.getElementById("simple").style.backgroundColor = "red";
}

// Partie présentation titre

var i = 0;
var txt = "Qui sommes nous?"; /* le text */
var speed = 100;
var presentation = document.getElementsByClassName("presentation");
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

// CHANGEMENT BACKGROUND

function pickColor() {
  $("#colorpicker").click();
}

$("#grayButton").click(switchGray);
$("#whiteButton").click(switchWhite);
$("#blueButton").click(switchBlue);
$("#yellowButton").click(switchYellow);

function switchGray() {
  var divElt = document.querySelectorAll("div,section,footer");
  console.log(divElt);
  for (i = 0; i <= divElt.length; i++) {
    if (divElt[i].style.backgroundColor != "rgb(0, 0, 0)") {
      divElt[i].style.backgroundColor = "rgb(0, 0, 0)";
    }

    $("body").attr("class", "gray");
    $("h1").attr("class", "gray");
    $("p").attr("class", "gray");
    $("h3").attr("class", "gray");
    $("p").attr("class", "gray");
  }
}

function switchYellow() {
  $("body").attr("class", "yellow");
  // $("h1").attr("class", "yellow");
}
