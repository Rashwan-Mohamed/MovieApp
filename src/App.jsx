import {
  BrowserRouter,
  Outlet,
  Route,
  Router,
  useLocation,
} from "react-router";
import Nav from "./Components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { showChanged } from "./features/mainSlice/moviesSlice";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const show = useSelector((state) => state.movies.show);
  const dispatch = useDispatch();
  let hasSeries = location.pathname.toLowerCase().includes("series");

  useEffect(() => {
    if (hasSeries) {
      dispatch(showChanged("series"));
    } else if (show !== "movies") {
      dispatch(showChanged("movies"));
    }
  }, [location]);
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  );
}

export default App;
