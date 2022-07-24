const tv = require("./tv.json");
const fs = require("fs");

const tvGenresRepeated = [
  ...new Set(tv.map((t) => t.categories.map((c) => c.name).join(","))),
];
const tvGenres = [...new Set(tvGenresRepeated.toString().split(","))]
  .sort()
  .filter((g) => g !== "" && g !== "XXX");
tvGenres.unshift("Top Picks", "All Categories");
console.log(tvGenres);
const tvGenreJSON = JSON.stringify({ tvGenres: tvGenres });
fs.writeFileSync("./tvGenre.json", tvGenreJSON);
