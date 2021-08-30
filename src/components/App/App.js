import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';



function App() {
  return (
    <div className="App">
      <Router> 
        <nav>
              <Link to="/" exact>Movie List</Link>
              <br />
              <Link to="/addMovie" exact>Add Movie</Link>
        </nav>

      <h1>The Movies Saga!</h1>       
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* Details page */}
        <Route path="/details" exact>
          <Details />
        </Route>
        {/* Add Movie page */}
        <Route path="/addMovie" exact>
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
