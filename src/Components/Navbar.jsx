import React from "react";
import { LiaImdb } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import './Navbar.css'
export default function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <NavLink to="/">
            <LiaImdb style={{ color: "yellow", fontSize: "4.3rem" }} />
          </NavLink>
          <ul>
            <li>
              <NavLink to="/movies/popular">Popular</NavLink>
            </li>
            <li>
              <NavLink to="/movies/top_rated">Top-rated</NavLink>
            </li>
            <li>
              <NavLink to="/movies/upcoming">Upcoming</NavLink>
            </li>
          </ul>
        </div>
        <VscAccount style={{ color: "white", fontSize: "1.6rem" }} />
      </div>
    </>
  );
}
