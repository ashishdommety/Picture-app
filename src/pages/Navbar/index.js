import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./style.css";

const Navbar = () => (
  <BrowserRouter>
    <div className="navigation">
      <Link to="/">
        <button id="nav_button">Go back home</button>
      </Link>
    </div>
  </BrowserRouter>
);

export default Navbar;
