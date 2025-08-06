document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(
    ".type-list input[type='checkbox']"
  );
  const selectedContainer = document.getElementById("selected-options");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const value = checkbox.value;

      if (checkbox.checked) {
        const button = document.createElement("button");
        button.className = "option-btn btn btn-sm btn-outline-dark me-2 mb-2";
        button.dataset.value = value;
        button.innerHTML = `${value} <span class="remove">&times;</span>`;

        //  click x then remove the checked
        button.querySelector(".remove").addEventListener("click", (e) => {
          e.stopPropagation();
          checkbox.checked = false;
          button.remove();
        });

        selectedContainer.appendChild(button);
      } else {
        // remove button
        const btnToRemove = selectedContainer.querySelector(
          `.option-btn[data-value="${value}"]`
        );
        if (btnToRemove) btnToRemove.remove();
      }
    });
  });
});
