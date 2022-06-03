const inventoryFormHandler = async (event) => {
  event.preventDefault();

  const mediaType = document.querySelector("#mediaType-inventory").value.trim();
  const genre = document.querySelector("#genre-inventory").value.trim();
  const title = document.querySelector("#title-inventory").value.trim();
  const costPrice = document.querySelector("#costPrice-inventory").value.trim();
  const retailPrice = document
    .querySelector("#retailPrice-inventory")
    .value.trim();

  const response = await fetch("/api/inventory", {
    method: "POST",
    body: JSON.stringify({ mediaType, genre, title, costPrice, retailPrice }),
    headers: { "Content-Type": "application/json" },
  });

};

document
  .querySelector(".inventory-entry-form")
  .addEventListener("submit", inventoryFormHandler);

  //Add route to push inventory to database