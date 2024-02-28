import './App.css';
import Counter from './components/counter/counter.js'
import SearchComponent from './components/search/search.js'
import GenreList from './components/genre/genreSelect.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
           <Counter 
           initialValue={0}
           />
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
        </p>
      </header>
    </div>
  );
}

export default App;
