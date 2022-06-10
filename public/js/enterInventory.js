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
  const quantity = parseInt(
    document.querySelector("#quantity-inventory").value.trim()
  );
  const product_artist = document
    .querySelector("#artist-inventory")
    .value.trim();

  const response = await fetch("/api/inventory", {
    method: "POST",
    body: JSON.stringify({
      media_type,
      category_id,
      product_name,
      product_artist,
      wholesale_price,
      retail_price,
      quantity,
      product_artist,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/enterInventory");
  } else {
    alert("Failed to create project");
  }
};

document
  .querySelector(".inventory-entry-form")
  .addEventListener("submit", inventoryFormHandler);

  // // const alertHandler = async (event) => {
  // //   event.preventDefault();
  // //   console.log(alertHandler);
  // //   const myAlert = document.querySelector("#myAlert");
  // //   myAlert.addEventListener("close.bs.alert", (event) => {});
  // //   const alertClose = document.querySelector("#linkClose");
  
  //   //document.querySelector("#alertClose").addEventListener("submit", alertClose);
  // };
