import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieItem ({movie}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        dispatch({
            type: 'FETCH_DETAILS',
            payload: movie.id
        });
        history.push('/details');
    }

    return (
        <div>
            <div>
                <h3>{movie.title}</h3>
                <img onClick={handleClick} src={movie.poster} alt={movie.title}/>
            </div>
        </div>
    )
}

export default MovieItem;