enum movieGenre {
    ACTION = "ação",
    DRAMA = "drama",
    COMEDY = "comédia",
    ROMANCE = "romance",
    HORROR = "terror"
}

function movie(movieName:string, releaseYear:number, movieGenre:string, note?:number): any {
    let movie = {
        name: movieName,
        releaseYear: releaseYear,
        genre: movieGenre,
        note: note
    }

    return movie;
}

console.log(movie('Duna', 2021, movieGenre.ACTION, 74));
console.log(movie('Duna', 2021, movieGenre.ACTION));
