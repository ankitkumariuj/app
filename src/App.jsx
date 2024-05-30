import { useState, useEffect } from "react";
import './App.css'
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard";
import Footer from "./Footer";


const API_URL = "http://www.omdbapi.com?apikey=8a8e4c8a";

function App() {
  const [movies, setMovies] = useState([])
  const [serachTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("hollywood movies");
  }, []);


  return (
    <>
    
      <div className="app">
        <h1>MovieSearches</h1>

        <div className="search">
          <input placeholder="Search for movies"
            value={serachTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />

          <img src={SearchIcon} alt="search" onClick={() => searchMovies(serachTerm)} />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />

            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
<Footer phone="+91- 7292875008" email="ankityadav12044@gmail.com" add="Daladali Chowk,Ranchi Jharkhand"/>
      </div>
    </>
  )
}

export default App