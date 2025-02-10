import React from "react";
import { Link } from "react-router";
import Search from "./Search";

export default function Nav() {
  return (
    <nav>
      <ul>
        <Link>Movies</Link>
        <Link>Series</Link>
        <Link>Discover</Link>
      </ul>
      <Search></Search>
    </nav>
  );
}
