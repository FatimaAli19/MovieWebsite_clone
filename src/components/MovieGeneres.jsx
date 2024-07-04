import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles.css";

const genres = [
  { link: "https://desicinemas.tv/category/action/", Name: "Action" },
  { link: "https://desicinemas.tv/category/adventure/", Name: "Adventure" },
  { link: "https://desicinemas.tv/category/animation/", Name: "Animation" },
  { link: "https://desicinemas.tv/category/biography/", Name: "Biography" },
  { link: "https://desicinemas.tv/category/bollywood/", Name: "Bollywood" },
  { link: "https://desicinemas.tv/category/comedy/", Name: "Comedy" },
  { link: "https://desicinemas.tv/category/crime/", Name: "Crime" },
  { link: "https://desicinemas.tv/category/documentary/", Name: "Documen..." },
  { link: "https://desicinemas.tv/category/drama/", Name: "Drama" },
  { link: "https://desicinemas.tv/category/family/", Name: "Family" },
  { link: "https://desicinemas.tv/category/fantasy/", Name: "Fantasy" },
  { link: "https://desicinemas.tv/category/gujrati/", Name: "Gujrati" },
  { link: "https://desicinemas.tv/category/hindi-dubbed/", Name: "Hindi D..." },
  { link: "https://desicinemas.tv/category/history/", Name: "History" },
  { link: "https://desicinemas.tv/category/horror/", Name: "Horror" },
  { link: "https://desicinemas.tv/category/marathi/", Name: "Marathi" },
  { link: "https://desicinemas.tv/category/music/", Name: "Music" },
  { link: "https://desicinemas.tv/category/mystery/", Name: "Mystery" },
  { link: "https://desicinemas.tv/category/punjabi/", Name: "Punjabi" },
  { link: "https://desicinemas.tv/category/romance/", Name: "Romance" },
  { link: "https://desicinemas.tv/category/science-fiction/", Name: "Science ..." },
  { link: "https://desicinemas.tv/category/tamil/", Name: "Tamil" },
  { link: "https://desicinemas.tv/category/thriller/", Name: "Thriller" },
  { link: "https://desicinemas.tv/category/tv-movie/", Name: "TV Movie" },
  { link: "https://desicinemas.tv/category/war/", Name: "War" },
];

const MovieGenres = () => {
  return ( 
    <div className="row">
      {genres.map((genre, index) => (
        <div key={index} className="col-lg-6 col-md-12 col-sm-12 genre-item">
          <a href={genre.link}> {genre.Name}</a>
        </div>
      ))}
    </div>
  );
};

export default MovieGenres;
