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
