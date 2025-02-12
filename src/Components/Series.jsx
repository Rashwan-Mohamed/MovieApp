import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Movie from "./Movie";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import NowPlaying from "./NowPlaying";
import { useDispatch } from "react-redux";
import { setDisplay } from "../features/mainSlice/moviesSlice";

export function Series() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  //top_rated
  const handleMore = (rev) => {
    dispatch(setDisplay(rev));
  };
  return (
    <>
      <main className="groupMovies">
        <section className="viewGenre">
          <div className="twoColumns">
            <h1>trending </h1>
            <Link
              onClick={() => handleMore("trending")}
              to={"/viewSeries/trending"}
            >
              SEE ALL {">"}
            </Link>
          </div>
          <NowPlaying whatShow={"trending"} series={true}></NowPlaying>
        </section>

        <section className="viewGenre">
          <div className="twoColumns">
            <h1>popular</h1>
            <Link
              onClick={() => handleMore("popular")}
              to={"/viewSeries/popular"}
            >
              SEE ALL {">"}
            </Link>
          </div>

          <NowPlaying whatShow={"popular"} series={true}></NowPlaying>
        </section>
        <section className="viewGenre">
          <div className="twoColumns">
            <h1>top rated</h1>
            <Link
              onClick={() => handleMore("top_rated")}
              to={"/viewSeries/top_rated"}
            >
              SEE ALL {">"}
            </Link>
          </div>

          <NowPlaying whatShow={"top_rated"} series={true}></NowPlaying>
        </section>
      </main>
    </>
  );
}
