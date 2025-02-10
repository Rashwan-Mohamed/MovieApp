import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Movie from "./Components/Movie";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import NowPlaying from "./Components/NowPlaying";
import { useDispatch } from "react-redux";
import { setDisplay } from "./features/mainSlice/moviesSlice";

export default function Home() {
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
            <h1>Popular</h1>
            <Link
              onClick={() => handleMore("now_playing")}
              to={"/view/now_playing"}
            >
              SEE ALL {">"}
            </Link>
          </div>
          <NowPlaying whatShow={"now_playing"}></NowPlaying>
        </section>
        {/* <section className="viewGenre">
          <h1>Now Playing</h1>
          <NowPlaying whatShow={"popular"}></NowPlaying>
        </section> */}
        <section className="viewGenre">
          <div className="twoColumns">
            <h1>Top Rated</h1>
            <Link
              onClick={() => handleMore("top_rated")}
              to={"/view/top_rated"}
            >
              SEE ALL {">"}
            </Link>
          </div>

          <NowPlaying whatShow={"top_rated"}></NowPlaying>
        </section>
        <section className="viewGenre">
          <div className="twoColumns">
            <h1>Upcoming</h1>
            <Link onClick={() => handleMore("upcoming")} to={"view/upcoming"}>
              SEE ALL {">"}
            </Link>
          </div>

          <NowPlaying whatShow={"upcoming"}></NowPlaying>
        </section>
      </main>
    </>
  );
}
