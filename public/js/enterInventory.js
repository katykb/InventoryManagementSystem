const inventoryFormHandler = async (event) => {
  event.preventDefault();

  //changed const names to match with models
  const media_type = document
    .querySelector("#mediaType-inventory")
    .value.trim();
  const genre_type = document.querySelector("#genre-inventory").value.trim();
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
      genre_type,
      product_name,
      wholesale_price,
      retail_price,
    }),
    headers: { "Content-Type": "application/json" },
  });
};


<<<<<<< HEAD:public/js/inventory.js
  const media_type = document.querySelector("#mediaType-inventory-levels").value.trim();
  console.log(media_type);
  const genre_type = document.querySelector("#genreType-inventory-levels").value.trim();
  window.location.href= `/inventory/${genre_type}`

  // const getResponse = await fetch("/api/inventory/", {
  //   method: "GET",
  //   body: JSON.stringify({

  //   })
  // })

}
=======
>>>>>>> 0135293f230b173bd12b17920673dca04ad50457:public/js/enterInventory.js

document
  .querySelector(".inventory-entry-form")
  .addEventListener("submit", inventoryFormHandler);



//Add route to push inventory to database
