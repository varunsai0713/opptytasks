const API_KEY = "ee9aa55b";
const API_URL = "https://www.omdbapi.com/";

function searchSeries() {
  const seriesName = document.getElementById("searchInput").value.trim();
  const resultDiv = document.getElementById("seriesContainer");

  if (seriesName === "") {
    resultDiv.innerHTML = "Please enter a TV series name";
    return;
  }

  resultDiv.innerHTML = "Loading...";

  fetch(`${API_URL}?t=${seriesName}&type=series&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      if (data.Response === "False") {
        resultDiv.innerHTML = "No series found";
        return;
      }

      resultDiv.innerHTML = `
        <div class="card">
          <h2>${data.Title}</h2>
          <p>IMDb Rating: ${data.imdbRating}</p>
          <p>Total Seasons: ${data.totalSeasons}</p>
          <p>${data.Plot}</p>
        </div>
      `;
    });
}
