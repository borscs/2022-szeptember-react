import React, {useCallback, useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import {Alert, CircularProgress, Snackbar} from "@mui/material";


function App() {
    const dummyMovies = [
        {
            id: 1,
            title: 'Some Dummy Movie',
            openingText: 'This is the opening text of the movie',
            releaseDate: '2021-05-18',
        },
        {
            id: 2,
            title: 'Some Dummy Movie 2',
            openingText: 'This is the second opening text of the movie',
            releaseDate: '2021-05-19',
        },
    ];

    const [movies, setMovies] = useState(dummyMovies);
    const [isLOading, setIsLOading] = useState(false);
    const [error, setError] = useState(null);
    const [open, setOpen] = React.useState(false);

    console.log(movies);

     const  fetchMovieHandler = useCallback(async () => {
        setIsLOading(true);
        setError(null);
        try {
            const response = await fetch('https://swapi.dev/api/fims/');
            if(!response.ok){
                throw new Error('Something went wrong');
            }
            const data = await response.json();
            const transformedMovie = data.results.map((movieData) => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date
                };
            });
            setMovies(transformedMovie);
            setIsLOading(false);

        } catch (e) {
            setError(e.message);
            setOpen(true);
            setIsLOading(false);
        }
    }, []);

     useEffect(() => {
         fetchMovieHandler();
     }, [])


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMovieHandler}>Fetch Movies</button>
            </section>
            <section>
                {!isLOading && error === null && <MoviesList movies={movies}/>}
                {isLOading && error === null && <CircularProgress color="success" size={80} variant="indeterminate"/>}
                {!isLOading && error !== null &&
                    <Snackbar open={open} anchorOrigin={{ vertical: 'top',horizontal: 'center'}}
                              onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                            {error};
                        </Alert>
                    </Snackbar>
                }
            </section>
        </React.Fragment>
    );
}

export default App;
