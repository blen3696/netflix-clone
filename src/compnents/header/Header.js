import React, { useState } from "react";
import "./header.css";
import NetflixLogo from "../images/Netflix_Logo_PMS.png";
import Search from "@mui/icons-material/Search";
import Notification from "@mui/icons-material/NotificationsNone";
import Account from "@mui/icons-material/AccountBox";
import Arrow from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="header-outer-container">
      <div className="header-container">
        <div className="header-left">
          <ul className="nav-main">
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" />
            </li>
            <li className="nav-desktop">Home</li>
            <li className="nav-desktop">TV Shows</li>
            <li className="nav-desktop">Movies</li>
            <li className="nav-desktop">Latest</li>
            <li className="nav-desktop">My List</li>
            <li className="nav-desktop">Browse by Language</li>
            <li className="nav-mobile-icon" onClick={toggleMenu}>
              {isMobileMenuOpen ? <Close /> : <Menu />}
            </li>
          </ul>

          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>My List</li>
                <li>Browse by Language</li>
              </ul>
            </div>
          )}
        </div>

        <div className="header-right">
          <ul>
            <li>
              <Search />
            </li>
            <li>
              <Notification />
            </li>
            <li>
              <Account />
            </li>
            <li>
              <Arrow />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
