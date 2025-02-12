import React from "react";
import { Link, useParams } from "react-router";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { showChanged } from "../features/mainSlice/moviesSlice";

export default function Nav() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.movies.show);
  const params = useParams();
  const handleChangeShow = (what) => {
    // if (show !== what) {
    //   dispatch(showChanged(what));
    // }
  };

  // if (!show && params.Series === "series") {
  //   dispatch(showChanged("series"));
  // }
  // if (!show && !params.Series) {
  //   dispatch(showChanged("movies"));
  // }
  return (
    <nav>
      <ul>
        <Link
          className={show == "movies" ? "activeNink" : ""}
          onClick={() => handleChangeShow("movies")}
          to={"/"}
        >
          Movies
        </Link>
        <Link
          className={show == "series" ? "activeNink" : ""}
          onClick={() => handleChangeShow("series")}
          to={"/series"}
        >
          Series
        </Link>

        {/* <Link>Movies</Link> */}
        {/* <Link>Series</Link> */}
        {/* <Link>Discover</Link> */}
      </ul>
      <Search></Search>
    </nav>
  );
}
