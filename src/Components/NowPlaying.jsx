import React, { useEffect, useState } from "react";
import SwiperCom from "./Swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setMovies as patch } from "../features/mainSlice/moviesSlice";
import { fetchMovies } from "../http";

export default function NowPlaying({ whatShow, series }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const displayed = useSelector((state) => state.movies.displayed);
  // const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let query = "";
        if (series && whatShow == "trending") {
          query = `https://api.themoviedb.org/3/trending/tv/week?language=en-US`;
        } else {
          query = `https://api.themoviedb.org/3/${series ? "tv" : "movie"}/${whatShow}`;
        }
        const response = await fetchMovies(query);

        const data = response.results;

        setMovies(data);
      } catch (error) {
        setError(`Failed to fetch data ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  // useEffect(() => {
  //   if (displayed === whatShow) {
  //     dispatch(patch(movies));
  //   }
  //   return () => {
  //     if (displayed === whatShow) {
  //       dispatch(patch(movies));
  //     }
  //   };
  // }, [displayed]);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>An Error has occured, couldn't fetch movies info.</h1>;
  }

  return (
    <SwiperCom>
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
          <SwiperSlide key={id}>
            <div className="swipperContent">
              <h1 className="movieTitle">{title}</h1>
              <Link to={`${series ? "/series" : "movies"}/${id}`}>
                <img
                  className="movieImg"
                  src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
                  alt=""
                />
              </Link>
              <p className="avgt"> Vote: {vote_average}</p>
              {/* {release_date.split("-")[0]} */}
            </div>
          </SwiperSlide>
        );
      })}
    </SwiperCom>
  );
}
