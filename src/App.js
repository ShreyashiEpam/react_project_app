import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/counter.js'
import SearchComponent from './components/search/search.js'
import GenreList from './components/genre/genreSelect.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
           <Counter />
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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
