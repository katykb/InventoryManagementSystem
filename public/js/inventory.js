const inventoryFormHandler = async (event) => {
  event.preventDefault();

  //changed const names to match with models
  const media_type = document
    .querySelector("#mediaType-inventory")
    .value.trim();
  const category_id = document.querySelector("#genre-inventory").value.trim();
  const product_name = document.querySelector("#title-inventory").value.trim();
  const wholesale_price = document
    .querySelector("#wholesalePrice-inventory")
    .value.trim();
  const retail_price = document
    .querySelector("#retailPrice-inventory")
    .value.trim();

  const response = await fetch("/api/inventory", {
    method: "POST",
    body: JSON.stringify({
      media_type,
      category_id,
      product_name,
      wholesale_price,
      retail_price,
    }),
    headers: { "Content-Type": "application/json" },
  });
};

document
  .querySelector(".inventory-entry-form")
  .addEventListener("submit", inventoryFormHandler);

//Add route to push inventory to database
