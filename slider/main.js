document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll(".custom-slider");
  
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  
    function addAnimation() {
      sliders.forEach((slider) => {
        slider.setAttribute("data-animated", true);
  
        // Make an array from the elements within `.custom-slider-inner`
        const sliderInner = slider.querySelector(".custom-slider__inner");
        const sliderContent = Array.from(sliderInner.children);
  
        sliderContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          sliderInner.appendChild(duplicatedItem);
        });
      });
    }
  });
