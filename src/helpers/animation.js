export function animateOnScroll(selector) {
  document.addEventListener("DOMContentLoaded", function () {
    var element = document.querySelector(selector);
    if (!element) {
      console.error(`No element with selector "${selector}" found`);
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true) {
          element.classList.add("in-viewport");
        } else {
          element.classList.remove("in-viewport");
        }
      },
      { threshold: [0] }
    );

    observer.observe(element);
  });
}

export function elementAnimateOnScroll(selector, animationClass) {
  document.addEventListener("DOMContentLoaded", function () {
    var element = document.querySelector(selector);
    if (!element) {
      console.error(`No element with selector "${selector}" found`);
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true) {
          element.classList.add(animationClass);
        } else {
          // Remove the animation class after a delay
          setTimeout(function () {
            element.classList.remove(animationClass);
          }, 1000); // Adjust this value as needed
        }
      },
      { threshold: [0] }
    );

    observer.observe(element);
  });
}
