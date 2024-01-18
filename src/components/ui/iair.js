import { gsap } from "https://esm.sh/gsap";

export function handleClick() {
  console.log("Button clicked");
}

export function initParallax() {
  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("parallax-button");

    button.addEventListener("mousemove", function (e) {
      parallaxIt(e, ".parallax-text", 80);
    });

    button.addEventListener("mouseenter", function (e) {
      gsap.to(button, 0.3, { height: 200, width: 200 });
      gsap.to(".parallax-text", 0.3, { scale: 1.3 });
    });

    button.addEventListener("mouseleave", function (e) {
      gsap.to(button, 0.3, { height: 150, width: 150 });
      gsap.to(".parallax-text", 0.3, { scale: 1, x: 0, y: 0 });
    });
  });
}

function parallaxIt(e, target, movement) {
  var button = document.getElementById("parallax-button");
  var relX = e.pageX - button.offsetLeft;
  var relY = e.pageY - button.offsetTop;

  gsap.to(target, 0.3, {
    x: ((relX - button.offsetWidth / 2) / button.offsetWidth) * movement,
    y: ((relY - button.offsetHeight / 2) / button.offsetHeight) * movement,
    ease: "power2.out",
  });
}
