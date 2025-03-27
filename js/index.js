var currentIndex = 0;
    var slides = document.querySelector(".slides");
    var totalSlides = document.querySelectorAll(".slide").length;
    document.getElementById("next").onclick = function () {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    };
    document.getElementById("prev").onclick = function () {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalSlides - 1;
      }
      updateCarousel();
    };
    function updateCarousel() {
      var newTransformValue = -currentIndex * 100 + "%";
      slides.style.transform = "translateX(" + newTransformValue + ")";
    }