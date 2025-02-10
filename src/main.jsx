import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home.jsx";
import Movie from "./Components/Movie.jsx";
import { Provider } from "react-redux";
import { store } from "./App/store.js";
import ViewMore from "./features/mainSlice/ViewMore.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />}></Route>
            <Route path="/movies/:id" element={<Movie />}></Route>
            <Route path="/view/:genre" element={<ViewMore />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
