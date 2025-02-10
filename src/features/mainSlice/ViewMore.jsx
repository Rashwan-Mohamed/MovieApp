import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function ViewMore() {
  const movies = useSelector((state) => state.movies.movies);
  console.log(movies, "Rasssshwan");

  return (
    <>
      <section className="viewNos">
        {movies.map((movie) => {
          const {
            title,
            poster_path,
            backdrop_path,
            overview,
            popularity,
            release_date,
            vote_average,
            vote_count,
            id,
          } = movie;
          return (
            <div className="gridEle">
              <h1 className="Tite">{title}</h1>
              <Link to={`/movies/${id}`}>
                <img
                  className="movieView"
                  src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
                  alt=""
                />
              </Link>
              <p>Average Vote: {vote_average}</p>
              {release_date.split("-")[0]}
            </div>
          );
        })}
      </section>
    </>
  );
}
