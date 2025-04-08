import Movie from "./Movie.js";
import setMoviePrice from "./Seats.js";

// hämtar filmerna från JSON servern
fetch("http://localhost:3000/movies")
  .then((response) => response.json())
  .then((moviesData) => {
    // hämta menyn för alla filmer
    const movieSelect = document.getElementById("movie");

    // skapar movie objekt från json-datan
    const movies = moviesData.map((movieData) => new Movie(
      movieData.Title,
      movieData.Year,
      movieData.Price,
      movieData.Poster,
    ));

    // Loopar igenom alla filmer och lägger in dom i menyn
    movies.forEach((movie) => {
      const option = document.createElement("option");
      option.value = movie.title;
      option.textContent = `${movie.title} (${movie.year}) - ${movie.price}kr`;
      movieSelect.appendChild(option);
    });

    // Om användaren byter film i menyn
    movieSelect.addEventListener("change", (e) => {
      // hittar filmen på användarens val
      const selectedMovie = movies.find((movie) => movie.title === e.target.value);

      if (selectedMovie) {
        // Uppdatera filmens poster när användaren byter film
        const posterContainer = document.getElementById("movie-poster-container");
        const moviePoster = document.getElementById("movie-poster");

        //
        moviePoster.src = selectedMovie.poster;
        posterContainer.style.display = "block";

        /// Fixar priset på biljetterna när filmen väljs
        setMoviePrice(selectedMovie.price);
      }
    });

    // Första filmen väljs direkt
    if (movies.length > 0) {
      movieSelect.value = movies[0].title;
      movieSelect.dispatchEvent(new Event("change"));
    }
  });
