console.log("script.js loaded");

const apiKey = "Tpy6v24UnzXgXB4XZ21G1ZwvjBEhXd2D";
const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

// a. Store the container
const gifContainer = document.querySelector("#gif-container");

// b. Store the button
const fetchButton = document.querySelector("#fetch-gif-btn");

// c. Add event listener
fetchButton.addEventListener("click", async function() {
  try {
    // Fetch data from the API
    const response = await fetch(endpoint);
    const data = await response.json();

    // Get array of image URLs
    const images = data.data.map(gif => gif.images.original.url);

    // Clear any previous GIFs
    gifContainer.innerHTML = "";

    // Add each image to the container
    for (let url of images) {
      gifContainer.innerHTML += `<img src="${url}" class="col-3 mb-3 img-fluid">`;
    }

    // Preview in console
    console.log(images);

  } catch (error) {
    console.error("Error fetching GIFs:", error);
  }
});