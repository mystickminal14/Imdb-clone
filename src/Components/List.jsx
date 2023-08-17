import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Movies from "./Movies";

export default function List() {
 const [list, setList] = useState([]);
  const { type } = useParams();

  async function fetchData2() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=2933cae520e958c54e974ed5617846c0`
      );
      setList(response.data.results);
      console.log(response.data.results)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData2();
  }, [type]);
  useEffect(() => {
    fetchData2();
  }, []);
  return (
    <>
      <h1 className="trend">{(type ? type : "Popular").toUpperCase()}</h1>
      <div className="listcards">
        {list.map((display, ik) => (
          <Movies
            poster={display.poster_path}
            id={display.id}
            title={display.original_title}
            date={display.release_date}
            rating={display.vote_average}
            key={ik}
          />
        ))}
      </div>
    </>
  );
}
