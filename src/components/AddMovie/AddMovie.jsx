import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

function AddMovie() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [newMovie, setNewMovie] = useState(
        {
            title: '',
            poster: '',
            description: '',
            genre: ''
        }
    );

    const handleSubmit = event => {
        event.preventDefault();

        console.log('movie object ', newMovie );
        // dispatch({
        //     type: 'ADD_MOVIE',
        //     payload: newMovie
        // })
    }

    const onCancel = () => {
        history.push('/');
    } 

    return (
        <div>
            <h1>Add Movies Page!</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="movie title"
                    onChange={(event) => setNewMovie({...newMovie, title: event.target.value})}
                    value={newMovie.title}
                />
                <br />
                <input 
                    type="text" 
                    placeholder="movie poster url"
                    onChange={(event) => setNewMovie({...newMovie, poster: event.target.value})}
                    value={newMovie.poster}
                />
                <br />
                <textarea 
                    name="description" 
                    placeholder="movie description"
                    onChange={(event) => setNewMovie({...newMovie, description: event.target.value})}
                    value={newMovie.description}
                    rows="5" 
                    cols="50"

                >
                </textarea>
                <br />
                <select name="genres" onChange={(event) => setNewMovie({...newMovie, genre: event.target.value})} value={newMovie.genre}>
                    <option value="Adventure">Adventure</option>
                    <option value="Animated">Animated</option>
                    <option value="Biographical">Biographical</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Disaster">Disaster</option>
                    <option value="Drama">Drama</option>
                    <option value="Epic">Epic</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Musical">Musical</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Space-Opera">Space-Opera</option>
                    <option value="Superhero">Superhero</option>
                </select>
                <br />
                <button onClick={onCancel}>Cancel</button>
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
}

export default AddMovie;