import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../movieSlice";

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);

  const dispatch = useDispatch();

  const handleRemoveMovie = (id) => {
    dispatch(removeMovie(id));
  };

  return (
    <div
      style={{
        maxWidth: "100%",
        width: "100%",
        margin: "40px auto",
        padding: 24,
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333 !important" }}>
        Movie List
      </h1>
      {movies.map((movie) => (
        <div
          key={movie.id}
          style={{
            marginBottom: 16,
            padding: 16,
            background: "#a1a1a1",
            borderRadius: 8,
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <strong style={{ color: "#555" }}>Movie ID:</strong> {movie.id}
            <br />
            <span style={{ fontSize: 18, fontWeight: 500 }}>{movie.name}</span>
          </div>
          <button
            onClick={() => handleRemoveMovie(movie.id)}
            style={{
              background: "#e74c3c",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              padding: "8px 14px",
              cursor: "pointer",
              fontWeight: 600,
              transition: "background 0.2s",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
