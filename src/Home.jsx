import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Movie from "./Components/Movie";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import NowPlaying from "./Components/NowPlaying";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  //top_rated

  return (
    <>
      <main className="groupMovies">
        <section className="viewGenre">
          <h1>Popular</h1>
          <NowPlaying whatShow={"now_playing"}></NowPlaying>
        </section>
        <section className="viewGenre">
          <h1>Now Playing</h1>
          <NowPlaying whatShow={"popular"}></NowPlaying>
        </section>
        <section className="viewGenre">
          <h1>Top Rated</h1>
          <NowPlaying whatShow={"top_rated"}></NowPlaying>
        </section>
        <section className="viewGenre">
          <h1>Upcoming</h1>
          <NowPlaying whatShow={"upcoming"}></NowPlaying>
        </section>
      </main>
    </>
  );
}
