const API_KEY = "ee9aa55b";
const API_URL = "https://www.omdbapi.com/";

function searchSeries() {
  const seriesName = document.getElementById("searchInput").value.trim();
  const container = document.getElementById("seriesContainer");
  const message = document.getElementById("message");

  message.innerHTML = "";
  container.innerHTML = "";

  if (seriesName === "") {
    message.textContent = "Please enter a TV series name";
    return;
  }

  
  container.innerHTML = `<div class="loader"></div>`;

  fetch(`${API_URL}?t=${seriesName}&type=series&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {

      if (data.Response === "False") {
        container.innerHTML = "";
        message.textContent = "No TV series found";
        return;
      }

      container.innerHTML = `
        <div class="card">
          <h2>${data.Title}</h2>
          <p class="rating">⭐ IMDb Rating: ${data.imdbRating}</p>
          <p><strong>Total Seasons:</strong> ${data.totalSeasons}</p>
          <p>${data.Plot}</p>
        </div>
      `;
    })
    .catch(() => {
      container.innerHTML = "";
      message.textContent = "Error fetching data";
    });
}
