

const trending = [
  "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
  "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  "https://image.tmdb.org/t/p/w500/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg"
];

const popular = [
  "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
  "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
  "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg"
];

function loadMovies(list, id){
  const container = document.getElementById(id);
  list.forEach(img=>{
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<img src="${img}">`;
    container.appendChild(div);
  });
}

loadMovies(trending, "trending");
loadMovies(popular, "popular");



const API_KEY = "ee9aa55b";
const API_URL = "https://www.omdbapi.com/";

document.getElementById("searchInput").addEventListener("keydown", function(e){
  if(e.key === "Enter"){
    searchSeries();
  }
});

function searchSeries(){
  const seriesName = document.getElementById("searchInput").value.trim();
  const container = document.getElementById("seriesContainer");
  const message = document.getElementById("message");

  container.innerHTML = "";
  message.textContent = "";

  if(seriesName === ""){
    message.textContent = "Please enter a TV series name";
    return;
  }

  fetch(`${API_URL}?t=${seriesName}&type=series&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {

      if(data.Response === "False"){
        message.textContent = "No TV series found";
        return;
      }

      container.innerHTML = `
        <div class="series-card">
          <img src="${data.Poster !== "N/A" ? data.Poster : ""}">
          <h2>${data.Title}</h2>
          <p class="series-rating">⭐ IMDb Rating: ${data.imdbRating}</p>
          <p><strong>Total Seasons:</strong> ${data.totalSeasons}</p>
          <p>${data.Plot}</p>
        </div>
      `;
    })
    .catch(()=>{
      message.textContent = "Error fetching data";
    });
}
