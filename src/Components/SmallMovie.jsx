import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import useWidth from "../UseWidth";

export default function SmallMovie({ passed, series }) {
  const width = useWidth();
  let wordLimit = 250;
  if (width < 1250) {
    wordLimit = 150;
  }
  if (width < 1025) {
    wordLimit = 100;
  }
  if (width < 768) {
    wordLimit = 50;
  }
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  let whare;

  if (series) {
    const {
      adult,
      backdrop_path,
      first_air_date,
      genre_ids,
      id,
      media_type,
      name,
      origin_country,
      original_language,
      original_name,
      overview,
      popularity,
      poster_path,
      vote_average,
      vote_count,
    } = passed;
    whare = (
      <>
        {" "}
        <Link to={`/series/${id}`}>
          <img
            className="movieView"
            src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
            alt=""
          />
        </Link>
        {hover && (
          <div className="hovered">
            <h1 className="Tite">{name}</h1>
            {width > 500 && (
              <p>
                {overview.length > wordLimit
                  ? overview.slice(0, wordLimit) + ", CLICK TO SEE MORE"
                  : overview}
              </p>
            )}

            <p>Average Vote: {vote_average}</p>
            <p>{first_air_date?.split("-")[0]}</p>
            {/* <p>{comGenre.slice(1)}</p> */}
          </div>
        )}
      </>
    );
  } else {
    const {
      title,
      poster_path,
      backdrop_path,
      overview,
      popularity,
      release_date,
      vote_average,
      vote_count,
      genres,
      id,
    } = passed;
    let comGenre = "";

    genres?.forEach((gene) => {
      comGenre = comGenre + ", " + gene.name;
    });
    whare = (
      <>
        {" "}
        <Link to={`/movies/${id}`}>
          <img
            className="movieView"
            src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
            alt=""
          />
        </Link>
        {hover && (
          <div className="hovered">
            <h1 className="Tite">{title}</h1>
            {width > 500 && (
              <p>
                {overview.length > wordLimit
                  ? overview.slice(0, wordLimit) + ", CLICK TO SEE MORE"
                  : overview}
              </p>
            )}
            <p> Average Vote: {vote_average}</p>
            <p>{release_date?.split("-")[0]}</p>
            <p>{comGenre.slice(1)}</p>
          </div>
        )}
      </>
    );
  }
  if (!whare) {
    return <h1>Error</h1>;
  }
  return (
    <>
      <div
        onClick={() => navigate(`/series/${id}`)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="gridEle"
      >
        {" "}
        {whare}
      </div>
    </>
  );
}
