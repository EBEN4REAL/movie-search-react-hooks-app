import React , {createContext, useState} from  "react"

export const MovieContext = createContext()

export  const  MovieProvider = () => {
    const initialState = {
        loading: true,
        movies: [],
        errorMessage: null,
        imdb_movies: [],
    };
    const [movie, setMovies] = useState(initialState)

    return (
        <MovieContext.Provider>
            {props.children}
        </MovieContext.Provider>
    )
}