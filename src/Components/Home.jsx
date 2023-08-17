import React, { useEffect, useState } from "react";
import axios from "axios";
import {NavLink} from 'react-router-dom';
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import List from "./List";
export default function Home() {
  const [movies, getMovies] = useState([]);
  async function fetchData() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=2933cae520e958c54e974ed5617846c0"
      );
      getMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

console.log(movies)
  useEffect(() => {
    fetchData();
  }, []);

  return <>
    <div className="carosel">
      <Carousel showThumbs={false}
        autoPlay={true}
        transitionTime={2}
        infiniteLoop={true}
        showStatus={false}>
          {movies.map((display ,isi)=>{
            
            return(
              <NavLink key ={isi} to={`/movies/${display.id}`} style={{color:'white', textDecoration:'none'}}>
                        <div className="img">
                          <img src={`https://image.tmdb.org/t/p/original${display.backdrop_path }`} alt=""movie images/>
                        </div>
                        <div className="cards">
                          <h1>{display.original_title}</h1>
                          <h2>{display.release_date}  {display.vote_average}⭐</h2>
                          <p>{display.overview}</p>
                        </div>
              </NavLink>
              
            )
          })}
        </Carousel>
  </div>
  <List/>
  </>;
}
