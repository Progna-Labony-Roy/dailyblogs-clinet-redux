import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navbar">
        <div className="">
          <a
            target="_blank"
            className="nav-icons"
            href="https://www.facebook.com/"
          >
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a
            target="_blank"
            className="nav-icons"
            href="https://www.pinterest.com/"
          >
            <i className="fa-brands fa-square-pinterest"></i>
          </a>
          <a
            target="_blank"
            className="nav-icons"
            href="https://www.instagram.com/"
          >
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </div>
        <div className="nav-items">
          <li to="" className="link-items">
            HOME
          </li>
          <li to="" className="link-items">
            PROFILE
          </li>
          <li to="" className="link-items">
            ABOUT
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
