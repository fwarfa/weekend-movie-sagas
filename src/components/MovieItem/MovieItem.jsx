import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function MovieItem ({movie}) {
    const classes = useStyles();
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
            <Paper >
                <Typography variant="h6" gutterBottom>{movie.title}</Typography>
                <img onClick={handleClick} src={movie.poster} alt={movie.title}/>
            </Paper>
        </div>
    )
}

export default MovieItem;