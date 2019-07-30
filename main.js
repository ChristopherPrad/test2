let switcher = 0;
let sticky = document.querySelector(".sticky");

if (localStorage.getItem("changebg") != undefined) {
  switcher = localStorage.getItem("changebg");
}

let change = document.querySelector("#togglebutton");
document
  .getElementById("change-theme-btn")
  .addEventListener("click", function() {
    if (switcher == 0) {
      switcher = 1;
      localStorage.setItem("changebg", switcher);
      changeStyle();
    } else if (switcher == 1) {
      switcher = 0;
      localStorage.clear();
      changeStyle();
    }
  });

function changeStyle() {
  document.querySelector("#slider").style.backgroundColor = "inherit";
  if (switcher == 1) {
    change.style.backgroundColor = "#AF853B";
    change.style.color = "white";
  } else {
    change.style.backgroundColor = "#CBAB9C";
    change.style.color = "";
  }
}
changeStyle();

// NAVBAR

// window.onscroll = () => {
//   const nav = document.getElementById("navbar");
//   if (this.scrollY <= 10) nav.className = "";
//   else nav.className = "scroll";
// };
// const nav = document.querySelector("#header");
// const menu = document.querySelector(".menu");
// window.onscroll = () => {
//   if (this.scrollY <= 10);
//   else nav.className = "scroll";
// };

// BOUTON SCROLL

$(document).ready(function() {
  $(".js-scrollTo").on("click", function() {
    // Au clic sur un élément
    var page = $(this).attr("href"); // Page cible
    var speed = 4000; // Durée de l'animation (en ms)
    $("html, body").animate({ scrollTop: $(page).offset().top }, speed); // Go
    return false;
  });
});

// scroll animation

var tl = new TimelineMax({ onUpdate: updatePercentage });
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from("blockquote", 0.5, { x: 200, opacity: 0 });
tl.from("#span", 1, { width: 0 }, "=-.5");
tl.from("#office", 1, { x: -200, opacity: 0, ease: Power4.easeInOut }, "=-1");
tl.from("#building", 1, { x: 200, opacity: 0, ease: Power4.easeInOut }, "=-.7");

tl2.from("#boxa", 1, { opacity: 0, scale: 0 });
tl2.to("#boxa", 0.5, {
  left: "20%",
  scale: 1.3,
  borderColor: "white",
  borderWidth: 12,
  boxShadow: "1px 1px 0px 0px rgba(0,0,0,0.09)"
});

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin(".sticky")
  .setTween(tl)
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "blockquote"
})
  .setTween(tl2)
  .addTo(controller);

function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}
// var x = window.matchMedia("(max-width: 600px)");

// myFunction(x); // Call listener function at run time

// function myFunction(x) {
//   if (x.matches) {
//     scene = new ScrollMagic.Scene({
//       triggerElement: ".sticky",
//       triggerHook: "onLeave",
//       duration: "100%"
//     })
//       .setPin(".sticky")
//       .setTween(tl)
//       .addTo(controller);
//   }
// }

// // RESPONSIVE ANIMATION
// function ScrollMagic.Scene({
//   if (x.matches) {
//     // If media query matches
//     document.body.style.backgroundColor = "yellow";
//   } else {
//     document.body.style.backgroundColor = "pink";
//   }
// }
// x.addListener(myFunction); // Attach listener function on state changes

// box effect apparition

$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  if (wScroll > $(".box").offset().top - $(window).height() / 1.2) {
    $(".box").each(function(i) {
      setTimeout(function() {
        $(".box")
          .eq(i)
          .addClass("fadeIn");
      }, 300 * (i + 1));
    });
  } else {
    $(".box").removeClass("fadeIn");
  }
});

// scroll page UI
function pagination() {
  var offset = $(document).scrollTop();
  var windowHeight = $(window).height();
  var $body = $("body");

  switch (true) {
    case offset > windowHeight * 4:
      $body.removeClass().addClass("page-4");
      break;
    case offset > windowHeight * 2:
      $body.removeClass().addClass("page-3");
      break;
    case offset > windowHeight * 1:
      $body.removeClass().addClass("page-2");
      break;
    default:
      $body.removeClass().addClass("page-1");
  }
}

pagination();

$(document).on("scroll", pagination);

$(document).on("click", 'a[href^="#"]', function(e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    2000
  );
});
