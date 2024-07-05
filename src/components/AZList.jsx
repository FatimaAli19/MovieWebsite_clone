import React from "react";
import AlphabetButtons from "./AlphabetButtons";
import "../assets/styles.css";
import { useState, useEffect } from "react";

const genreMapping = {
  28: { name: "Action", link: "https://desicinemas.tv/category/action/" },
  12: { name: "Adventure", link: "https://desicinemas.tv/category/adventure/" },
  16: { name: "Animation", link: "https://desicinemas.tv/category/animation/" },
  35: { name: "Comedy", link: "https://desicinemas.tv/category/comedy/" },
  80: { name: "Crime", link: "https://desicinemas.tv/category/crime/" },
  99: {
    name: "Documentary",
    link: "https://desicinemas.tv/category/documentary/",
  },
  18: { name: "Drama", link: "https://desicinemas.tv/category/drama/" },
  10751: { name: "Family", link: "https://desicinemas.tv/category/family/" },
  14: { name: "Fantasy", link: "https://desicinemas.tv/category/fantasy/" },
  36: { name: "History", link: "https://desicinemas.tv/category/history/" },
  27: { name: "Horror", link: "https://desicinemas.tv/category/horror/" },
  10402: { name: "Music", link: "https://desicinemas.tv/category/music/" },
  9648: { name: "Mystery", link: "https://desicinemas.tv/category/mystery/" },
  10749: { name: "Romance", link: "https://desicinemas.tv/category/romance/" },
  878: {
    name: "Science Fiction",
    link: "https://desicinemas.tv/category/science-fiction/",
  },
  10770: {
    name: "TV Movie",
    link: "https://desicinemas.tv/category/tv-movie/",
  },
  53: { name: "Thriller", link: "https://desicinemas.tv/category/thriller/" },
  10752: { name: "War", link: "https://desicinemas.tv/category/war/" },
  37: { name: "Western", link: "https://desicinemas.tv/category/western/" },
};

const AZList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=ec9137bb173013f4d439aa3a045d0503"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const moviesData = data.results;

        if (Array.isArray(moviesData)) {
          const sortedMovies = moviesData.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
          setMovies(sortedMovies);
        } else {
          setError("Data is not an array");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching the movies data", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  let i = 1;
  return (
    <div className="bg-grey">
      .
      <div className="content">
        <div className="AZheading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#de1212"
            class="bi bi-camera-reels"
            viewBox="0 0 16 16"
          >
            <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
            <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm6 8.73V7.27l-3.5 1.555v4.35zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1" />
            <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
          </svg>
          <h1>Movies by letter</h1>
        </div>
        <div>
          <AlphabetButtons />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Year</th>
              <th>Duration</th>
              <th>Genre</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>{i++}</td>
                <td>
                  {" "}
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    style={{
                      width: "50px",
                      height: "75px",
                      marginRight: "5px",
                    }}
                  />
                  <span style={{ cursor: "pointer" }}>{movie.title}</span>
                </td>
                <td style={{ textAlign: "center",color:"#818083" }}>
                  {new Date(movie.release_date).getFullYear()}
                </td>
                <td style={{ textAlign: "center",color:"#818083" }}>{movie.duration || "2h 44m"}</td>
                <td style={{ textAlign: "center" }}>
                  {movie.genre_ids
                    .map((id) => (
                      <a
                        key={id}
                        href={genreMapping[id].link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {genreMapping[id].name}
                      </a>
                    ))
                    .reduce((prev, curr) => [prev, ", ", curr])}
                </td>
                <td style={{ textAlign: "center" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    fill="#de1212"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AZList;
