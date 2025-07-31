document.addEventListener("DOMContentLoaded", () => {
  const cardsGrid = document.querySelector(".cards-grid");
  const allCards = Array.from(cardsGrid.querySelectorAll(".card"));

  // function to build the Grid
  function buildGrid() {
    const screenWidth = window.innerWidth;

    //  remove the content
    cardsGrid.innerHTML = "";

    if (screenWidth >= 1023) {
      // Desktop فقط (bootstrap lg = 992px+)
      const pattern = [3, 2];
      let patternIndex = 0;
      let i = 0;

      while (i < allCards.length) {
        const cardsInRow = pattern[patternIndex % pattern.length];
        const remaining = allCards.length - i;
        const count = remaining >= cardsInRow ? cardsInRow : remaining;

        const divRow = document.createElement("div");
        divRow.classList.add("cards-row");
        if (count === 3) divRow.classList.add("three");
        else if (count === 2) divRow.classList.add("two");
        else divRow.classList.add("one");

        for (let j = 0; j < count; j++) {
          divRow.appendChild(allCards[i + j]);
        }

        cardsGrid.appendChild(divRow);

        i += count;
        patternIndex++;
      }
    } else {
      // Tablet & Mobile: return the cards as befor without grouping
      allCards.forEach((card) => cardsGrid.appendChild(card));
    }
  }

  buildGrid();

  // at each chnage in size
  window.addEventListener("resize", buildGrid);
});
