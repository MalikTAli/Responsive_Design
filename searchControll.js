document.addEventListener("DOMContentLoaded", () => {
  const searchToggle = document.getElementById("searchToggle");
  const searchContainer = document.querySelector(".search-container");

  searchToggle.addEventListener("click", (e) => {
    e.preventDefault();
    searchContainer.classList.toggle("d-none");
  });
});
