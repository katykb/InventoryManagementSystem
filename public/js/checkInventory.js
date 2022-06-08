const genreFormHandler = async (event) => {
  event.preventDefault();

  // const media_type = document
  //   .querySelector("#mediaType-inventory-levels")
  //   .value.trim();
  // window.location.href = `/inventory/${media_type}`;
  // console.log(media_type);
  const genre_type = document
    .querySelector("#genreType-inventory-levels")
    .value.trim();
  window.location.href = `/inventory/genre/${genre_type}`;
  console.log(genre_type);

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
document
  .querySelector(".genre-form-group")
  .addEventListener("submit", genreFormHandler);

  document
  .querySelector(".media-form-group")
  .addEventListener("submit", mediaFormHandler);







 

