
import AddMovie from './AddMovie';
import './App.css';
import Movie from './Movie';
import MovieList from './MovieList';
import UpdateMovie from './UpdateMovie';

function App() {
  return (
    <div className="App">
      <h1>CRUD MERN STACK</h1>
      <MovieList/>
      <AddMovie/>
      <UpdateMovie/>
      <Movie/>
    </div>
  );
}

export default App;
