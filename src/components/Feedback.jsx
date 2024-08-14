import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles.css";
import SideFunctions from "./SideFunctions";
export default function Feedback() {
  return (
    <div className="bg-grey d-flex" style={{ paddingBottom: "350px", height:"max-content" }}>
      <div className="mainContainer mt-4 " style={{ paddingBottom: "350px", height:"max-content" }}>
        <div>
          <SideFunctions />
        </div>

        <div className="mb-3  ">
          <div>
            <i className="me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#de1212"
                class="bi bi-chat-left-text-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
              </svg>
            </i>
            <span className="rankHeading text-light">Comments</span>
          </div>
          <div className="contact">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#de1212"
                class="bi bi-info-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              </svg>
            </i>
            <div className="contactText">
              <span className="text-white">
                Your email will not be published.
              </span>
              <p>Required fields are marked *</p>
            </div>
          </div>
          <div className="form">
            <form>
              <textarea placeholder=" Comment..."></textarea>
              <div>
                <label>Name*</label>
                <input type="text" required/>
              </div>
              <div>
                <label>Email*</label>
                <input type="email" required />
              </div>
              <div>
                <label>Website</label>
                <input type="text" />
              </div>
            </form>
          </div>
          <div className="agreement">
            <input type="checkbox"/>
            <span>Save my name, email, and website in this browser for the next time I comment.</span>
          </div>
           
          <div className="form">
                <label>Are you human? Please solve:</label>
                <input type="text" required/>
              </div>
          
        </div>
        <div style={{marginTop:"100px"}}>
            <button className="btn-red"> Post Comment</button>
        </div>
      </div>
    </div>
  );
}
