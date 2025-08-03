document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card").forEach((card) => {
    const swatches = card.querySelector(".swatches");
    const prevBtn = card.querySelector(".prev");
    const nextBtn = card.querySelector(".next");

    if (!swatches || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    const visibleCount = 3; // number of colors to show
    const swatchWidth = 40; // (30 + 10margin-right)
    const totalSwatches = card.querySelectorAll(".swatch").length;

    function updateView() {
      const offset = -currentIndex * swatchWidth;
      swatches.style.transform = `translateX(${offset}px)`;
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= totalSwatches - visibleCount;
    }

    nextBtn.addEventListener("click", () => {
      if (currentIndex < totalSwatches - visibleCount) {
        currentIndex++;
        updateView();
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateView();
      }
    });

    updateView();
  });
});
