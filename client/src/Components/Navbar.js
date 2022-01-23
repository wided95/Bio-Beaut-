import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setshow] = useState(false);
  return (
    <div className="navbar">
      <div className="hamburger" onClick={() => setshow(!show)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <h1 id="b">B</h1>
      <h1>La Beauté Bio</h1>
      <ul className="nav-links">
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <Link to="/propos">
          <li>A propos</li>
        </Link>
        <Link to="/soins">
          <li>Soins du corps</li>
        </Link>
        <Link to="/maison">
          <li>Pour la maison</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <hr></hr>

      {show ? (
        <ul className="nav-links-small">
          <h1 style={{ cursor: "pointer" }} onClick={() => setshow(!show)}>
          <ion-icon name="close-outline"></ion-icon>
          </h1>
          <Link to="/">
            <li>Accueil</li>
          </Link>
          <Link to="/propos">
            <li>A propos</li>
          </Link>
          <Link to="/soins">
            <li>Soins du corps</li>
          </Link>
          <Link to="/maison">
            <li>Pour la maison</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      ) : null}
    </div>
  );
};

export default Navbar;
