import React from "react"; 
import AlphabetButtons from "./AlphabetButtons"; 
import Feedback from "./Feedback";
import Movies from "./Movies";
export default function WatchPage() {
  return (
    <>
    <div className="bg-grey" style={{marginTop:"100px"}}>
         
      <div className="AZlist col-lg-12">
        <AlphabetButtons />
      </div>
       <div>
        <Feedback/>
       </div>
       <div>
        <Movies/>
       </div>
    </div>
    </>
  );
}
