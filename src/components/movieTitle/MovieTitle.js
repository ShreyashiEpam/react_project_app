import React, { useState } from 'react';

const MovieTile = ({ movie, onTileClick }) => {
  const { imageUrl, name, releaseYear, genres } = movie;
  const [showContextMenu, setShowContextMenu] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setShowContextMenu(true);
  };

  const handleCloseContextMenu = () => {
    setShowContextMenu(false);
  };

  return (
    <div className="movie-tile">
      <div className="movie-info" onClick={() => onTileClick(movie)}>
        <img src={imageUrl} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>Release Year: {releaseYear}</p>
          <p>Genres: {genres.join(', ')}</p>
        </div>
      </div>
      <div className="context-menu" style={{ display: showContextMenu ? 'block' : 'none' }} onClick={handleCloseContextMenu}>
        <ul>
          <li>Edit</li>
          <li>Delete</li>
        </ul>
      </div>
      <div className="menu-button" onContextMenu={handleContextMenu}>
        <span>&#8942;</span>
      </div>
    </div>
  );
};

export default MovieTile;
