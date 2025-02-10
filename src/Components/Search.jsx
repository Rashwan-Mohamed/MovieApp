import React, { useEffect, useState } from "react";

export default function Search() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);
  const handleSearch = () => {};
  useEffect(() => {
    const doQuerySearch = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDgzYTdhN2M5YjhlZGNmN2RlZDYwNmU3ZjA5Mjg1NiIsIm5iZiI6MTY3NjczMTE0MS40MzkwMDAxLCJzdWIiOiI2M2YwZTMwNWEyNGM1MDAwODQ4YzkyZWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.0ps3nbsJzYSZFnBf4KKb8DmG6An5hzSe5SKyT5RsqdQ",
        },
      };
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`,
          options
        );
        if (!response.ok) {
          throw new Error("an error has occured during search");
        }
        const data = await response.json();
        setResults(data.results);
        console.log(data, response, data.results, "Rashwan");
      } catch (error) {
        setError("an error has occured during search");
      }
    };
    doQuerySearch();
  }, [value]);
  console.log(results, "restks");

  return (
    <div className="inputSea">
      <svg
        className="searchIcon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 32"
      >
        <path
          fill="#fff"
          d="M20.576 14.848q0-3.296-2.336-5.632t-5.664-2.368-5.664 2.368-2.336 5.632 2.336 5.664 5.664 2.336 5.664-2.336 2.336-5.664m9.152 14.88q0 .928-.704 1.6t-1.6.672q-.96 0-1.6-.672l-6.112-6.112q-3.2 2.208-7.136 2.208-2.56 0-4.896-.992t-4-2.688-2.688-4T0 14.848t.992-4.864T3.68 5.952t4-2.688 4.896-.992 4.896.992 4 2.688 2.688 4.032.992 4.864q0 3.936-2.208 7.136l6.112 6.112q.672.672.672 1.632"
        ></path>
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="search movie"
      />
      {results.length ? (
        <div className="displayResults">
          {" "}
          <ul>
            {results.map((mov) => {
              const { original_title, poster_path, release_date, id } = mov;
              return (
                <li key={id}>
                  <img
                    className="viewImg"
                    src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                    alt="serachResultImage"
                  />
                  <p>{original_title}</p>
                  <p> {release_date}</p>
                </li>
              );
            })}
          </ul>{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
/* */
