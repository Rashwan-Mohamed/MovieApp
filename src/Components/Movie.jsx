import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [error, setError] = useState("");
  const params = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDgzYTdhN2M5YjhlZGNmN2RlZDYwNmU3ZjA5Mjg1NiIsIm5iZiI6MTY3NjczMTE0MS40MzkwMDAxLCJzdWIiOiI2M2YwZTMwNWEyNGM1MDAwODQ4YzkyZWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.0ps3nbsJzYSZFnBf4KKb8DmG6An5hzSe5SKyT5RsqdQ",
      },
    };

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
          options
        );

        const data = await response.json();
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        setMovies(() => data);
      } catch (error) {
        setError(`Failed to fetch data ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    getImdp();
  }, [params]);

  const getImdp = async () => {
    const url = `https://imdb236.p.rapidapi.com/imdb/${movies?.id}/rating`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "821ee858b6msh909fdc48832e2cbp1c3ab5jsn6166dc6d2568",
        "x-rapidapi-host": "imdb236.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setRating(result.averageRating);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error || !movies) {
    return <h1>An Error has occured, couldn't fetch movie info.</h1>;
  }
  const {
    genres,
    title,
    poster_path,
    popularity,
    release_date,
    homepage: netflix,
    imdb_id: imdp,
    production_companies,
    status,
    origin_country,
    overview,
    runtime,
    vote_average,
    tagline,
  } = movies;
  let comGenre = "";

  genres?.forEach((gene) => {
    comGenre = comGenre + ", " + gene.name;
  });

  return (
    <>
      <section className="oneMovie">
        <header>
          <img
            className="movieImg"
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt=""
          />
        </header>
        <article className="movieArticle">
          <h1 className="movieTitle">{title}</h1>
          <p className="moviePara">{overview}</p>
          <h4>Genres: {comGenre.slice(1)}</h4>
          {runtime && <h4 className="runTime"> run-time: {runtime} mintues</h4>}
          {rating ? (
            <h4>IMDP Rating: {rating}</h4>
          ) : (
            <h4>average vote: {vote_average}</h4>
          )}

          <h4 className="moviePop">popularity: {popularity}</h4>
          <h4 className="releaseDate">release date: {release_date}</h4>
          <h4>status: {status}</h4>
          <Link
            className="dp"
            target="_blank"
            to={`https://www.imdb.com/title/${imdp}`}
          >
            <img src="/IMDb_Logo.png" alt="" />
          </Link>
          <h3 className="TagLine">{tagline}</h3>
        </article>
      </section>
    </>
  );
}
