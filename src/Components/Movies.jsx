import React, { useState } from "react";

import './Movies.css'
import { NavLink } from "react-router-dom";

export default function Movies(display) {
  const [load, isloading] = useState();
  return (
    <>
   
    <NavLink to={`/movies/${display.id}`} style={{ color: 'white', textDecoration: 'none' }}>
      <div className="card-container">
        <div className="imgHolder">
          <img src={`https://image.tmdb.org/t/p/original${display.poster}`} alt="get" />
        </div>
        <div className="details">
            <h3>{display.title}</h3>
           <div className="side">
           <h3>{display.date}  </h3> 
            <h3>{display.rating}⭐</h3></div> 

        </div>
      </div>
    </NavLink>
    </>
  );
}
