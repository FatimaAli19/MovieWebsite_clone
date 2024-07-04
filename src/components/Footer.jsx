import React from "react";
import logo from "../assets/images/logo.png"; 
import AlphabetButtons from "./AlphabetButtons";
import MovieGenres from "./MovieGeneres"
import Sidebar from "./Sidebar";

const Footer = () => {
  return (
    <div
      className="bg-footer text-white"
      style={{
        padding: "20px",
      }}
    >
      <div className="footer">
        <div className="row">
          <div className="col-lg-3 col-md-12 mb-4">
            <img src={logo} alt="logo" className="footerlogo"/>
            <p style={{ color: "#818083", padding: "20px 0", fontSize: "0.875rem" }}>
              Welcome to DesiCinemas. Watch and discuss your favourite Indian
              Movies online on Desi Cinemas. We are your one stop source for the
              latest Bollywood Movies.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 listing"  >
            <div  >
              <h6 style={{marginLeft:'16px'}}>Movie Genres</h6>
              <MovieGenres/>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <p style={{ color: "#818083" }}>Sort by Letters</p>
            <AlphabetButtons />
          </div>
          <div className="col-lg-2 col-md-12 mb-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
