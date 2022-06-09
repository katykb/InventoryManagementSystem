
  
  const subtractFormHandler = async (event) => {
    event.preventDefault();
  
    const product_name = document.querySelector("#title-inventory").value.trim();
    const product_artist = document
      .querySelector("#artist-inventory")
      .value.trim();
    const quantity = parseInt(
      document.querySelector("#quantity-inventory").value.trim()
    );
  
    const response = await fetch("/api/inventory/", {
      method: "POST",
      body: JSON.stringify({
        product_name,
        product_artist,
        quantity,
      }),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/subtractInventory");
    } else {
      alert("Failed to subtract inventory");
    }
  };
  
  document
    .querySelector(".inventory-subtract-form")
    .addEventListener("submit", subtractFormHandler);