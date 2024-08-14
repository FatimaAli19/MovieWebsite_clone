import React, { useState, useEffect,useHistory } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles.css"; 
import SideFunctions from "./SideFunctions";
import { Link } from "react-router-dom";
function MovieApi() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/now_playing?api_key=ec9137bb173013f4d439aa3a045d0503";

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setMovies(result.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
   

  return (
    <div className="bg-grey d-flex" style={{paddingBottom:'350px'}}>
      <div className="mainContainer mt-4">
         <SideFunctions/>

        <div className="mb-3  ">
          <i className="me-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="#de1212"
              className="bi bi-camera-reels-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
            </svg>
          </i>
          <span className="rankHeading text-light">Latest Movies</span>
           
        </div>
        <div className="card-container d-flex flex-wrap movieContainer">
          {movies.map((movie) => (
            <div key={movie.id} className="cardStyle">
              <a  >
                <Link to={"/WatchPage"}>

              <div
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "200px",
                }}
                className="videologo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="#de1212"
                  className="bi bi-play-circle"
                  viewBox="0 0 16 16"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    fill="rgba(0,0,0,0.6)"
                    stroke="white"
                    strokeWidth="0.7"
                  />
                  <polygon points="7,6 10,8 7,10" fill="#de1212" />
                </svg>
              </div>
                </Link>
              </a>
              <div
                className="cardMovie"
                style={{ backgroundColor: "#de1212", border: "none" }}
              >
                movie
              </div>
              <div className="card-text text-center py-2">
                <span>{movie.original_title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieApi;
