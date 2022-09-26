import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="container">
      {/* <Link to="/"> */}
        <img className="logo"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="NA.."
        />
      {/* </Link> */}
      <ul className="items">
        <li className="item">
          <Link to="/">Movies Test</Link>
        </li>
        <li className="item">
          <Link to="/TVShows">TV Shows Test</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
