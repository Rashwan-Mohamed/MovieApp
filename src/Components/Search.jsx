import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Search() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [results, setResults] = useState([]);
  const refo = useRef();
  const nputRef = useRef();
  const navigate = useNavigate();
  const series = useSelector((state) => state.movies.show);
  useEffect(() => {
    const doQuerySearch = async () => {
      const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
      };
      //https://api.themoviedb.org/3/search/tv?query=Game%20Of%20Thrones&include_adult=false&language=en-US&page=1
      try {
        let query = `https://api.themoviedb.org/3/search/${series == "series" ? "tv" : "movie"}?query=${value}&include_adult=false&language=en-US&page=1`;
        const response = await fetch(query, options);
        if (!response.ok) {
          throw new Error("an error has occured during search");
        }
        const data = await response.json();
        setResults(data.results);
        setShow(true);
      } catch (error) {
        setError("an error has occured during search");
      }
    };
    if (value) {
      doQuerySearch();
    } else {
      setShow(false);
    }
  }, [value]);
  useEffect(() => {
    const handleClick = (e) => {
      if (
        refo.current &&
        !refo.current.contains(e.target) &&
        !nputRef.current.contains(e.target)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  let reso;

  if (series == "series") {
    reso = (
      <div ref={refo} className="displayResults">
        {" "}
        <ul>
          {results.map((mov) => {
            const { name, poster_path, first_air_date, id } = mov;
            return (
              <li onClick={() => navigate(`series/${id}`)} key={id}>
                <img
                  className="viewImg"
                  src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                  alt="serachResultImage"
                />
                <p>{name}</p>
                <p> {first_air_date}</p>
              </li>
            );
          })}
        </ul>{" "}
      </div>
    );
  } else {
    reso = (
      <div ref={refo} className="displayResults">
        {" "}
        <ul>
          {results.map((mov) => {
            const { original_title, poster_path, release_date, id } = mov;
            return (
              <li onClick={() => navigate(`movies/${id}`)} key={id}>
                <img
                  className="viewImg"
                  src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                  alt="serachResultImage"
                />
                <p>{original_title}</p>
                <p> {release_date}</p>
              </li>
            );
          })}
        </ul>{" "}
      </div>
    );
  }
  return (
    <>
      {" "}
      <div className="inputSea">
        <svg
          className="searchIcon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 32"
        >
          <path
            fill="#fff"
            d="M20.576 14.848q0-3.296-2.336-5.632t-5.664-2.368-5.664 2.368-2.336 5.632 2.336 5.664 5.664 2.336 5.664-2.336 2.336-5.664m9.152 14.88q0 .928-.704 1.6t-1.6.672q-.96 0-1.6-.672l-6.112-6.112q-3.2 2.208-7.136 2.208-2.56 0-4.896-.992t-4-2.688-2.688-4T0 14.848t.992-4.864T3.68 5.952t4-2.688 4.896-.992 4.896.992 4 2.688 2.688 4.032.992 4.864q0 3.936-2.208 7.136l6.112 6.112q.672.672.672 1.632"
          ></path>
        </svg>
        <input
          ref={nputRef}
          type="text"
          onFocus={() => {
            if (value) {
              setShow(true);
            }
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={` search ${series == "series" ? "series" : "movie"}`}
        />
      </div>
      {show ? reso : ""}
    </>
  );
}
/* */
