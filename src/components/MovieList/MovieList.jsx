import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <Container>
            <Typography variant="h2" gutterBottom>Movie List</Typography>
            <Grid container spacing={5} className="movies">
                {movies.map(movie => (
                    <Grid 
                        item xs={12} md={4} lg={3} 
                        key={movie.id} 
                    >
                        <MovieItem movie={movie}/>
                    </Grid>
                ))}
            </Grid>
        </Container>

    );
}

export default MovieList;