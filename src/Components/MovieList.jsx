import React from 'react';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;

    const addFavouriteHandler = (movie) => {
        if (props.handleFavouritesClick) {
            props.handleFavouritesClick(movie);
        }
    };

    if (!props.movies || props.movies.length === 0) {
        return <p>No movies available</p>; // or any other placeholder or loading state
    }

    return (
        <>
            {props.movies.map((movie, index) => (
                <div key={index} className='image-container d-flex justify-content-start m-3'>
                    <img src={movie.Poster} alt='movie' />
                    <div className='overlay d-flex align-items-center justify-content-center'>
                        <FavouriteComponent onClick={() => addFavouriteHandler(movie)} />
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;
