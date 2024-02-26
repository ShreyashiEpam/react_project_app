import React from 'react';

class GenreList extends React.Component {
  render() {
    const { genres, selectedGenre, onSelect } = this.props;

    return (
      <div>
        {genres.map(genre => (
          <button
            key={genre}
            onClick={() => onSelect(genre)}
            style={{
              backgroundColor: genre === selectedGenre ? 'blue' : 'transparent',
              color: genre === selectedGenre ? 'white' : 'black'
            }}
          >
            {genre}
          </button>
        ))}
      </div>
    );
  }
}

export default GenreList;
