import React from "react";
import "./header.css";
import NetflixLogo from "../images/Netflix_Logo_PMS.png";
import Search from "@mui/icons-material/Search";
import Notification from "@mui/icons-material/NotificationsNone";
import Account from "@mui/icons-material/AccountBox";
import Arrow from "@mui/icons-material/ArrowDropDown";



const Header = () => {
    return(
        <div className="header-outer-container">
            <div className="header-container">
                
                <div className="header-left">
                <ul>
                  <li><img src = {NetflixLogo} width="100"/></li>
                  <li>Home</li>
                  <li>TVshows</li>
                  <li>Movies</li>
                  <li>Latest</li>
                  <li>MyList</li>
                  <li>Browse by Language</li>
                </ul>
                </div>

                <div className="header-right">
                   <ul>
                   <li><Search /></li>
                   <li><Notification /></li>
                   <li><Account/></li>
                   <li><Arrow /></li>
                   </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;