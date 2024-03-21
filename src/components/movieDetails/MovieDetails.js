import React from 'react';

const MovieDetails = ({ movie }) => {
  const { imageUrl, name, releaseYear, rating, duration, description } = movie;

  return (
    <div className="movie-details">
      <div className="poster">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <p><strong>Release Year:</strong> {releaseYear}</p>
        <p><strong>Rating:</strong> {rating}</p>
        <p><strong>Duration:</strong> {duration}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
