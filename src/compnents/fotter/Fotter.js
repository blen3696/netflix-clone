import React from "react";
import "./fotter.css";
import Facebook from "@mui/icons-material/FacebookOutlined";
import Instagram from "@mui/icons-material/Instagram";
import Youtube from "@mui/icons-material/YouTube";


const Fotter = () =>{
    return(
     <div className="fotter-outer-container">
        <div className="fotter-inner-container">

         <div className="fotter-data">
        
         <div>
            <ul>
                <li>Audio Description</li>
                <li>Investor Relation</li>
                <li>Legal Notice</li>
            </ul>
         </div>
         <div>
            <ul>
                <li>Help Centeer</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
            </ul>
         </div>
         <div>
            <ul>
                <li>Gift Cards</li>
                <li>Terms of Uses</li>
                <li>Corporate Information</li>
            </ul>
         </div>
         <div>
            <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
            </ul>
         </div>
      </div>
      <div className="fotter-icons">
           <ul>
             <li><Facebook /></li>
             <li><Instagram /></li>
             <li><Youtube /></li>
           </ul>
         </div>

      <div className="copy-right">
        &copy; 1997-2024 Netflix, Inc.
      </div>


     </div>
     </div>

    )
}

export default Fotter;