import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../../images/logo.svg";
import { FaCartArrowDown } from "react-icons/fa";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const links = [
    {
      id: 1,
      path: "/",
      text: "home",
    },
    {
      id: 2,
      path: "/menu",
      text: "menu",
    },
    {
      id: 3,
      path: "/shop",
      text: "shop",
    },
    {
      id: 4,
      path: "/contacts",
      text: "contacts",
    },
  ];

  const navbarHandler = () => {
    navbarOpen ? setNavbarOpen(false) : setNavbarOpen(true);
  };

  return (
    <nav className="navbar navbar-expand-sm fixed-top bg-light navbar-light ">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="cafe logo"></img>
      </Link>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={
          navbarOpen
            ? "collapse navbar-collapse show"
            : "collapse navbar-collapse"
        }>
        <ul className="navbar-nav mx-auto">
          {links.map((link) => {
            return (
              <li key={link.id} className="nav-item text-brown">
                <Link to={link.path} className="nav-link text-capitalize ">
                  {link.text}
                </Link>
              </li>
            );
          })}
          <li className="nav-item ml-sm-5">
            <FaCartArrowDown className="cart-icon snipcart-checkout" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
