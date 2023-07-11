"use strict";
var movieGenre;
(function (movieGenre) {
    movieGenre["ACTION"] = "a\u00E7\u00E3o";
    movieGenre["DRAMA"] = "drama";
    movieGenre["COMEDY"] = "com\u00E9dia";
    movieGenre["ROMANCE"] = "romance";
    movieGenre["HORROR"] = "terror";
})(movieGenre || (movieGenre = {}));
function movie(movieName, releaseYear, movieGenre, note) {
    let movie = {
        name: movieName,
        releaseYear: releaseYear,
        genre: movieGenre,
        note: note
    };
    return movie;
}
console.log(movie('Duna', 2021, movieGenre.ACTION, 74));
console.log(movie('Duna', 2021, movieGenre.ACTION));
//# sourceMappingURL=exerc%C3%ADcio10.js.map