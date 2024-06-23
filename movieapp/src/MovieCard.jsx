import React from "react";

function MovieCard({ movie1 }) {
  return (
    <div>
      <div className="movie">
        <div>
          <p>{movie1.Year}</p>
        </div>
        <div>
          <img src={movie1.Poster} alt={movie1.Title} />
        </div>
        <div>
          <span>{movie1.Type}</span>
          <h3>{movie1.Title}</h3>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
