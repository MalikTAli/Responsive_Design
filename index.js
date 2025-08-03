document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const showFilterBtn = document.querySelector(".show-filter button");
  const refineBtn = document.querySelector(".filter-btn-mobile button");
  const closeSidebar = document.querySelector(".close-sidebar");
  const overlay = document.querySelector(".overlay");
  const cardsContainer = document.querySelector(".cards-container");

  function handleResize() {
    const width = window.innerWidth;

    if (width >= 1024) {
      // Desktop
      sidebar.classList.remove("active");
      overlay?.classList.remove("active");

      if (
        !sidebar.classList.contains("hidden") &&
        !cardsContainer.classList.contains("col-9")
      ) {
        sidebar.classList.add("hidden");
        cardsContainer.classList.remove("col-9");
        cardsContainer.classList.add("col-12");
      }
    } else {
      // Tablet / Mobile
      sidebar.classList.remove("hidden");
      cardsContainer.classList.remove("col-9");
      cardsContainer.classList.add("col-12");
    }
  }

  if (showFilterBtn) {
    showFilterBtn.addEventListener("click", () => {
      sidebar.classList.toggle("hidden"); // just on desktop
      if (sidebar.classList.contains("hidden")) {
        cardsContainer.classList.remove("col-9");
        cardsContainer.classList.add("col-12");
        showFilterBtn.innerHTML = `<i class="bi bi-sliders"></i> Show Filter`;
      } else {
        cardsContainer.classList.remove("col-12");
        cardsContainer.classList.add("col-9");
        showFilterBtn.innerHTML = `<i class="bi bi-sliders"></i> Hide Filter`;
      }
    });
  }

  if (refineBtn) {
    refineBtn.addEventListener("click", () => {
      sidebar.classList.add("active");
      overlay.classList.add("active");
    });
  }

  if (closeSidebar) {
    closeSidebar.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });
  }

  handleResize();
  window.addEventListener("resize", handleResize);
});
