import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieTile from './MovieTitle.js';

describe('MovieTile component', () => {
  const movie = {
    imageUrl: 'https://example.com/poster.jpg',
    name: 'Movie Name',
    releaseYear: 2024,
    genres: ['Action', 'Adventure']
  };

  it('renders movie tile with correct information', () => {
    const { getByText, getByAltText } = render(<MovieTile movie={movie} />);
    
    expect(getByAltText('Movie Name')).toBeInTheDocument();
    expect(getByText('Movie Name')).toBeInTheDocument();
    expect(getByText('Release Year: 2024')).toBeInTheDocument();
    expect(getByText('Genres: Action, Adventure')).toBeInTheDocument();
  });

  it('calls onTileClick when clicked', () => {
    const onTileClick = jest.fn();
    const { getByText } = render(<MovieTile movie={movie} onTileClick={onTileClick} />);

    fireEvent.click(getByText('Movie Name'));
    expect(onTileClick).toHaveBeenCalledWith(movie);
  });
});
