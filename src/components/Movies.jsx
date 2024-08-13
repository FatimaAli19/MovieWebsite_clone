import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const movies = [
  { title: "Animal (HD)", image: require("../assets/images/animal.jpg") },
  {
    title: "Pushpa: The Rise - Part 1 (Hindi) (HD)",
    image: require("../assets/images/pushpa.jpg"),
  },
  {
    title: "K.G.F: Chapter 2 (Hindi) (HD)",
    image: require("../assets/images/kgf.jpg"),
  },
  { title: "Pathaan (HD)", image: require("../assets/images/pathan.jpg") },
  {
    title: "Salaar: Part 1 – Ceasefire (Hindi) (HD)",
    image: require("../assets/images/salaar.jpg"),
  },
  { title: "RRR (Hindi) (HD)", image: require("../assets/images/rrr.jpg") },
  {
    title: "Jawan (HD) (Extended Cut)",
    image: require("../assets/images/jawan.jpg"),
  },
  { title: "Shershaah", image: require("../assets/images/shershah.jpg") },
  {
    title: "Sooryavanshi (HD)",
    image: require("../assets/images/sooryavanshi.jpg"),
  },
  {
    title: "Gangubai kathiawadi (HD)",
    image: require("../assets/images/gangubai.jpg"),
  },
];

const Movies = () => {
  const chunkedMovies = [movies.slice(0, 8), movies.slice(2, 10)];

  return (
    <div className="bg-grey">
      <div className="mainContainer">
        <div>
          <i className="me-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="#de1212"
              class="bi bi-star"
              viewBox="0 1.5 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
            </svg>
          </i>
          <span className="rankHeading text-light">Most Popular</span>
        </div>
        <div className="card-container d-flex   flex-wrap">
          <Carousel>
            {chunkedMovies.map((chunk, index) => (
              <Carousel.Item key={index}>
            <a> 
          <Link to={"/WatchPage"}>
                <div className="d-flex justify-content-around">
                  {chunk.map((movie, idx) => (
                    <div key={idx} className="cardStyle">
                      <div
                        style={{
                          backgroundImage: `url(${movie.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          width: "100%",
                          height: "200px",
                        }}
                        className="videologo"
                      >
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          fill="#de1212"
                          class="bi bi-play-circle"
                          viewBox="0 0 16 16"
                        >
                           
                          <circle cx="8" cy="8" r="7" fill="rgba(0,0,0,0.6)" stroke="white" strokeWidth="0.7" />
                          <polygon points="7,6 10,8 7,10" fill="#de1212" />
                        </svg>
                      </div>
                      <div
                        className="cardMovie"
                        style={{ backgroundColor: "#de1212", border: "none" }}
                      >
                        movie
                      </div>

                      <div className="card-text text-center py-2">
                        <span>{movie.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
            </Link>
            </a>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Movies;
