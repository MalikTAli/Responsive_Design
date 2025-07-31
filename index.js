document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const showFilterBtn = document.querySelector(".show-filter button");
  const refineBtn = document.querySelector(".filter-btn-mobile button");
  const closeSidebar = document.querySelector(".close-sidebar");
  const overlay = document.querySelector(".overlay");
  const cardsContainer = document.querySelector(".cards-container");

  if (showFilterBtn) {
    showFilterBtn.addEventListener("click", () => {
      sidebar.classList.toggle("hidden"); // just for desktob
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
});
