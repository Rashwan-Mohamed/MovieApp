import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import SmallMovie from "../../Components/SmallMovie";
import { getMovies } from "./moviesSlice";
import SetPage from "../../Components/SetPage";
import useWidth from "../../UseWidth";
export default function ViewMore({ series }) {
  const width = useWidth();
  let initialLimit = 15;
  let wordLimit;
  if (width < 1250) {
    wordLimit = 150;
  }
  if (width < 1025) {
    initialLimit = 10;
  }
  if (width < 768) {
    initialLimit = 7;
  }
  if (width < 500) {
    initialLimit = 5;
  }
  // if()
  const movies = useSelector((state) => state.movies.movies);
  const [limit, setLimit] = useState(initialLimit);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const params = useParams();
  const status = useSelector((state) => state.movies.state);
  let start = 0;
  useEffect(() => {
    let baseUrl = ``;

    let queryParams = new URLSearchParams({
      language: "en-US",
      page: page,
    });

    if (series && params.genre == "trending") {
      baseUrl = `https://api.themoviedb.org/3/trending/tv/week?language=en-US`;
    } else {
      baseUrl = `https://api.themoviedb.org/3/${series ? "tv" : "movie"}/${params.genre}`;
      // `https://api.themoviedb.org/3/${series ? "tv" : "movie"}/${whatShow}`;
      queryParams = new URLSearchParams({
        language: "en-US",
        page: page,
        // sort_by: `popularity.asc`,
        // include_adult: false,
        // include_video: false,
        // with_release_type: 2 | 3,
      });
    }
    const query = `${baseUrl}?${queryParams.toString()}`;

    dispatch(getMovies(query));
    window.scrollTo(0, 0);
  }, [page, params.genre]);
  // useEffect(() => {}, [params]);
  useEffect(() => {
    if (page === limit) {
      setLimit(limit + 4);
      start = start + 4;
    }
    if (page <= limit - initialLimit) {
      setLimit(limit - 4);
    }
  }, [page]);
  const reSetPage = () => {
    setPage(1);
    setLimit(initialLimit);
  };
  useEffect(() => {
    reSetPage();
  }, [width]);
  if (movies.length == 0 || status == "pending") {
    return <h1>Loading</h1>;
  }

  let totalLength = movies.total_pages ?? 1;
  let totalPagess = Array.from({ length: totalLength }, (_, index) => {
    const pageNumber = index + 1;
    return (
      <button
        key={pageNumber}
        className={`circle-button ${page === pageNumber ? "buttonActive" : ""}`}
        onClick={() => setPage(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  });

  const slicedTotal = totalPagess.slice(limit - initialLimit ?? 0, limit);

  return (
    <>
      <section className="viewNos">
        <SetPage
          page={page}
          setPage={setPage}
          totalPagess={slicedTotal}
          reSetPage={reSetPage}
        ></SetPage>
        {movies.results.map((movie) => {
          return (
            <SmallMovie
              key={movie.id}
              passed={movie}
              series={series}
            ></SmallMovie>
          );
        })}
        <SetPage
          page={page}
          setPage={setPage}
          totalPagess={slicedTotal}
          reSetPage={reSetPage}
        ></SetPage>
      </section>
    </>
  );
}
