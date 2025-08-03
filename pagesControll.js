document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".cards-grid .card");
  const pagination = document.getElementById("pagination");
  const showMoreBtn = document.getElementById("showMore");
  const viewAllTopBtn = document.getElementById("viewAllTop");
  const viewAllBottomBtn = document.getElementById("viewAllBottom");
  const itemsCount = document.getElementById("itemsCount");

  const itemsPerPage = 10;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  let currentPage = 1;
  let visibleCount = itemsPerPage;
  let mode = "pagination"; // "pagination" | "showmore" | "viewall"

  //  to update the current count and index
  function updateCounter(startIndex, endIndex) {
    itemsCount.textContent = `${startIndex + 1}-${endIndex} of ${
      items.length
    } items`;
  }
  //  (Pagination mode)
  function showPage(page) {
    mode = "pagination";
    currentPage = page;
    const start = (page - 1) * itemsPerPage;
    const end = Math.min(start + itemsPerPage, items.length);
    items.forEach((item, index) => {
      item.style.display = index >= start && index < end ? "flex" : "none";
    });

    showMoreBtn.style.display = "inline-block"; // always visible in pagination mode
    renderPagination();
    updateCounter(start, end);
  }

  //  Show More
  function showMore() {
    mode = "showmore";
    visibleCount = Math.min(visibleCount + itemsPerPage, items.length);
    updateCounter(0, visibleCount);
    items.forEach((item, index) => {
      item.style.display = index < visibleCount ? "flex" : "none";
    });

    if (visibleCount >= items.length) {
      showMoreBtn.style.display = "none";
    }
    renderPagination(true); // hide pagination in showmore mode
  }

  function viewAll() {
    mode = "viewall";
    items.forEach((item) => (item.style.display = "flex"));
    updateCounter(0, items.length);
    showMoreBtn.style.display = "none";
    renderPagination(true); // hide pagination
  }

  // make Pagination
  function renderPagination(hide = false) {
    if (hide) {
      pagination.innerHTML = "";
      return;
    }

    pagination.innerHTML = "";

    // Previous
    const prev = document.createElement("li");
    prev.className = `page-item ${currentPage === 1 ? "disabled" : ""}`;
    prev.innerHTML = `<a class="page-link" href="#">Previous</a>`;
    prev.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage > 1) showPage(currentPage - 1);
    });
    pagination.appendChild(prev);

    //  pages numbers
    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement("li");
      li.className = `page-item ${i === currentPage ? "active" : ""}`;
      li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
      li.addEventListener("click", (e) => {
        e.preventDefault();
        showPage(i);
      });
      pagination.appendChild(li);
    }

    // Next
    const next = document.createElement("li");
    next.className = `page-item ${
      currentPage === totalPages ? "disabled" : ""
    }`;
    next.innerHTML = `<a class="page-link" href="#">Next</a>`;
    next.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage < totalPages) showPage(currentPage + 1);
    });
    pagination.appendChild(next);
  }

  // Events
  showMoreBtn.addEventListener("click", showMore);
  viewAllTopBtn.addEventListener("click", viewAll);
  viewAllBottomBtn.addEventListener("click", viewAll);

  // first time
  showPage(1);
});
