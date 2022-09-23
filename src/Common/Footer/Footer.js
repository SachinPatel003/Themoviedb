import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="first">
          <img
          className="img1"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="na.."
          />
          <button>JOIN THE COMMUNITY</button>
        </div>
        <div>
          <ul>
            <h3>THE BASICS</h3>
            <li>About TMDB</li>
            <li>Contact Us</li>
            <li>Support Forums</li>
            <li>API</li>
            <li>System Status</li>
          </ul>
        </div>
        <div>
          <ul>
            <h3>GET INVOLVED</h3>
            <li>Contribution Bible</li>
            <li>Add New Movie</li>
            <li>Add New TV Show</li>
          </ul>
        </div>
        <div>
          <ul>
            <h3>COMMUNITY</h3>
            <li>Guidelines</li>
            <li>Discussions</li>
            <li>Leaderboard</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div>
          <ul>
            <h3>LEGAL</h3>
            <li>Terms of Use</li>
            <li>API Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
