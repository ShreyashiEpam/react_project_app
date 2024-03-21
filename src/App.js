import './App.css';
import React, { useState } from 'react';
import Counter from './components/counter/counter.js';
import SearchComponent from './components/search/search.js';
import GenreList from './components/genre/genreSelect.js';
import MovieDetails from './components/movieDetails/MovieDetails.js';
import SortControl from './components/sort/sortControl.js';
import MovieTile from './components/movieTitle/MovieTitle.js';

function App() {
  const selectedMovie = {
    imageUrl: 'https://th.bing.com/th/id/OIP.gJJYkhUSGJfNFGI55XvTPQHaKH?w=136&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    name: 'Rebecca',
    releaseYear: 1940,
    rating: 'PG-13',
    duration: '2h 30min',
    description: 'A horror movie'
  };

  const [currentSelection, setCurrentSelection] = useState('releaseDate');

  const handleSortChange = (newValue) => {
    setCurrentSelection(newValue);
    console.log('Sort by changed:', newValue);
  };

  const movies = [
    {
      imageUrl: 'https://example.com/poster.jpg',
      name: 'Movie 1',
      releaseYear: 2021,
      genres: ['Action', 'Adventure']
    },
    {
      imageUrl: 'https://example.com/poster.jpg',
      name: 'Movie 2',
      releaseYear: 2022,
      genres: ['Comedy', 'Drama']
    },
  ];

  const handleTileClick = (movie) => {
    console.log('Clicked on movie:', movie);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Counter initialValue={0} />
          <SearchComponent
            initialQuery="initial search query"
            onSearch={(query) => {
              console.log('Search query:', query);
            }}
          />
          <GenreList
            genres={['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi']}
            selectedGenre="Action"
            onSelect={(genre) => {
              console.log('Selected genre:', genre);
            }}
          />
          <MovieDetails movie={selectedMovie} />
          <SortControl currentSelection={currentSelection} onSelectionChange={handleSortChange} />
          {movies.map((movie, index) => (
            <MovieTile key={index} movie={movie} onTileClick={handleTileClick} />
          ))}
        </p>
      </header>
    </div>
  );
}

export default App;
