import React , {createContext, useState} from  "react"

export const MovieContext = createContext()

export  const  MovieProvider = (props) => {
    const initialState = {
        loading: true,
        movies: [],
        filteredMoviesList: [],
        errorMessage: null,
        imdb_movies: [],
    };
    const [moviesList , setMovies] = useState(initialState)

    return (
        <MovieContext.Provider value={[moviesList, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}