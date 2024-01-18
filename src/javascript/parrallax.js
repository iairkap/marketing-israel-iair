import { gsap } from "gsap/gsap-core";

export function handleClick() {
  console.log("Button clicked");
}

export function initParallax() {
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

  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
    var button = document.getElementById("parallax-button");

    button.addEventListener("mousemove", function (e) {
      console.log("Mouse move event");
      parallaxIt(e, ".parallax-text", 80);
    });

    button.addEventListener("mouseenter", function (e) {
      gsap.to(button, 0.3, { height: 200, width: 200 });
      gsap.to(".parallax-text", 0.3, { scale: 1.3 });
    });

    button.addEventListener("mouseleave", function (e) {
      console.log("Mouse enter event");
      gsap.to(button, 0.3, { height: 150, width: 150 });
      gsap.to(".parallax-text", 0.3, { scale: 1, x: 0, y: 0 });
    });
  });
}
