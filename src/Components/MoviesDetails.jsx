import React , {useState, useEffect} from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

export default function MoviesDetails() {
  const [movie, details] = useState([]);
  const {id}=useParams()

  useEffect(()=>{
    fetch()
    window.scroll(0,0)
  },[])
  async function fetch() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=2933cae520e958c54e974ed5617846c0`
      );
      details(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  return <>
  <NavLink to={`/movies/${id}`}style={{ color: 'white', textDecoration: 'none' }}>

  </NavLink>
  </>;
}
