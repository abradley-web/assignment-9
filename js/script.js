console.log("script.js loaded");

const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=Tpy6v24UnzXgXB4XZ21G1ZwvjBEhXd2D&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

async function fetchGifs() {
  try {
    // Fetch data from the Giphy API
    const response = await fetch(endpoint);
    const data = await response.json();

    // Extract the original image URLs and store in an array
    const images = data.data.map(gif => gif.images.original.url);

    // Preview the data in the console
    console.log(images);
      } catch (error) {
    console.error("Error fetching GIFs:", error);
  }
}