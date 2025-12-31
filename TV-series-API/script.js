const seriesData = [
  { name: "Breaking Bad", seasons: 5, rating: 9.5, summary: "A chemistry teacher turns into a drug kingpin." },
  { name: "Friends", seasons: 10, rating: 8.9, summary: "Six friends navigate life and love in New York." },
  { name: "Game of Thrones", seasons: 8, rating: 9.2, summary: "Noble families fight for control of the Iron Throne." },
  { name: "Stranger Things", seasons: 4, rating: 8.7, summary: "Kids uncover supernatural mysteries in their town." },
  { name: "Money Heist", seasons: 5, rating: 8.3, summary: "A criminal mastermind plans the biggest heist." },
  { name: "The Witcher", seasons: 3, rating: 8.1, summary: "A monster hunter struggles to find his place." },
  { name: "Dark", seasons: 3, rating: 8.8, summary: "A time-travel mystery across generations." },
  { name: "The Office", seasons: 9, rating: 8.9, summary: "Comedy about office employees and daily chaos." },
  { name: "Sherlock", seasons: 4, rating: 9.1, summary: "Modern adaptation of Sherlock Holmes." },
  { name: "Narcos", seasons: 3, rating: 8.8, summary: "Story of drug cartels and law enforcement." }
];

const container = document.getElementById("seriesContainer");

function displaySeries(data) {
  container.innerHTML = "";
  data.forEach(show => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${show.name}</h2>
      <p class="rating">⭐ Rating: ${show.rating}</p>
      <p><strong>Seasons:</strong> ${show.seasons}</p>
      <p>${show.summary}</p>
    `;
    container.appendChild(card);
  });
}

function searchSeries() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const filtered = seriesData.filter(show =>
    show.name.toLowerCase().includes(input)
  );
  displaySeries(filtered);
}

displaySeries(seriesData);
