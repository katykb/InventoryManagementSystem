const genreFormHandler = async (event) => {
  event.preventDefault();

  // const media_type = document
  //   .querySelector("#mediaType-inventory-levels")
  //   .value.trim();
  // window.location.href = `/inventory/${media_type}`;
  // console.log(media_type);
  const category_id = document
    .querySelector("#genreType-inventory-levels")
    .value.trim();
  window.location.href = `/inventory/genre/${category_id}`;
  console.log(category_id);

  // const getResponse = await fetch("/api/inventory/", {
  //   method: "GET",
  //   body: JSON.stringify({

  //   })
  // })
};

const mediaFormHandler = async (event) => {
  event.preventDefault();

  const media_type = document
    .querySelector("#mediaType-inventory-levels")
    .value.trim();
  window.location.href = `/inventory/media/${media_type}`;
  console.log(media_type);
};

const specificFormHandler = async (event) => {
  event.preventDefault();

  // const product_name = document
  //   .querySelector("#specificType-inventory-levels")
  //   .value.trim();
  // window.location.href = `/inventory/product/${product_name}`;
  // console.log(product_name);
const specificSearch = document.querySelector('#specificSearch').value.trim();

  const product_artist = document
    .querySelector("#specificType-inventory-levels")
    .value.trim();
  window.location.href = `/inventory/${product_artist}/${specificSearch}`;
  console.log(product_artist);
};

document
  .querySelector(".genre-form-group")
  .addEventListener("submit", genreFormHandler);

document
  .querySelector(".media-form-group")
  .addEventListener("submit", mediaFormHandler);

document
  .querySelector(".specific-form-group")
  .addEventListener("submit", specificFormHandler);
