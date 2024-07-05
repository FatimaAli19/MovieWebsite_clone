import React from "react";
import "../assets/styles.css";
import AlphabetButtons from "./AlphabetButtons";
export default function SearchBar() {
  return (
    <div className="bg-grey">
      <div className="mainContainer">
        <div className="outerSearch">
          <div>
            <input
              type="text"
              placeholder="Search Movies here "
              className="innerSearch"
            />
            {/* <i className="search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </i> */}
          </div>
        </div>
        <div className="AZlist mt-3">
          <div className="col-lg-12">
           <AlphabetButtons/>
          </div>
        </div>
      </div>
    </div>
  );
}
