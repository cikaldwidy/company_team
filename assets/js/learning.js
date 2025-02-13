document.addEventListener("DOMContentLoaded", function () {
  const textItems = document.querySelectorAll(".text-clickable");
  const displayImage = document.getElementById("displayImage");

  textItems.forEach((item) => {
    item.addEventListener("click", function () {
      const newImage = this.getAttribute("data-img");

      // Efek fade
      displayImage.style.opacity = 0;
      setTimeout(() => {
        displayImage.src = newImage;
        displayImage.style.opacity = 1;
      }, 300);
    });
  });
});
