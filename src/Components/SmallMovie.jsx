import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function SmallMovie({
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
  passed,
  series,
}) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  let whare;
  let comGenre = "";

  genres?.forEach((gene) => {
    comGenre = comGenre + ", " + gene.name;
  });
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
      <div
        onClick={() => navigate(`/series/${id}`)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="gridEle"
      >
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
            <p>
              {overview.length > 250
                ? overview.slice(0, 250) + ",  CLICK TO SEE MORE"
                : overview}
            </p>
            <p>Average Vote: {vote_average}</p>
            <p>{first_air_date.split("-")[0]}</p>
            {/* <p>{comGenre.slice(1)}</p> */}
          </div>
        )}
      </div>
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
    whare = (
      <div
        onClick={() => navigate(`/movies/${id}`)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="gridEle"
      >
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
            <p>
              {overview.length > 250
                ? overview.slice(0, 250) + ",  CLICK TO SEE MORE"
                : overview}
            </p>
            <p>Average Vote: {vote_average}</p>
            <p>{release_date.split("-")[0]}</p>
            <p>{comGenre.slice(1)}</p>
          </div>
        )}
      </div>
    );
  }

  return <>{whare}</>;
}
