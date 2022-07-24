const radio = require("./radio.json");
const fs = require("fs");

const radioGenresRepeated = [...new Set(radio.radio.map((rad) => rad.genre))];
const radioGenres = [
  ...new Set(radioGenresRepeated.toString().replace(/,/g, "/").split("/")),
].sort();
radioGenres.unshift("All Categories");
const radioGenreJSON = JSON.stringify({ radioGenres: radioGenres });
fs.writeFileSync("./radioGenre.json", radioGenreJSON);
