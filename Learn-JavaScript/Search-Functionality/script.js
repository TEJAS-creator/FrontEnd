const search = document.getElementById("search");
const cards = document.querySelectorAll(".anime-cards");

search.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  cards.forEach((card) => {
    const text = card.textContent.toLowerCase();
    if (text.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
