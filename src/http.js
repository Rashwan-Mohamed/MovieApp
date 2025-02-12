export const fetchMovies = async (query) => {
  const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  const response = await fetch(query, options);
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Couldnt fetch data");
  }
  return data;
};
