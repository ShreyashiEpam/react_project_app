import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GenreList from './genreSelect.js';

describe('GenreList Component', () => {
  it('should render genres correctly', () => {
    const genres = ['Action', 'Adventure', 'Comedy'];
    const selectedGenre = 'Action';
    const onSelect = jest.fn();

    const { getByText } = render(
      <GenreList genres={genres} selectedGenre={selectedGenre} onSelect={onSelect} />
    );

    genres.forEach(genre => {
      expect(getByText(genre)).toBeInTheDocument();
    });
  });

  it('should call onSelect function when a genre is clicked', () => {
    const genres = ['Action', 'Adventure', 'Comedy'];
    const selectedGenre = 'Action';
    const onSelect = jest.fn();

    const { getByText } = render(
      <GenreList genres={genres} selectedGenre={selectedGenre} onSelect={onSelect} />
    );

    fireEvent.click(getByText('Adventure'));
    expect(onSelect).toHaveBeenCalledWith('Adventure');
  });

  it('should highlight selected genre', () => {
    const genres = ['Action', 'Adventure', 'Comedy'];
    const selectedGenre = 'Action';
    const onSelect = jest.fn();

    const { getByText } = render(
      <GenreList genres={genres} selectedGenre={selectedGenre} onSelect={onSelect} />
    );

    expect(getByText('Action').style.backgroundColor).toBe('blue');
    expect(getByText('Action').style.color).toBe('white');

    expect(getByText('Adventure').style.backgroundColor).toBe('transparent');
    expect(getByText('Adventure').style.color).toBe('black');

    expect(getByText('Comedy').style.backgroundColor).toBe('transparent');
    expect(getByText('Comedy').style.color).toBe('black');
  });
});
