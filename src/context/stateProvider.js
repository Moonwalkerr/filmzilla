import {createContext, useState} from "react";

export const StateContext = createContext();

export const StateContextProvider = (props) =>{
    
    // For Auth
    const [user, setUser] = useState(null);
    
    // For Home Page Display
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);
    
    // For Searching purposes :
    const [searching_tvShows, setSearchingTVShows] = useState(false);
    const [searching_movies, setSearchingMovies] = useState(false);
    const [searchIsNull, setSearchIsNull] = useState(true);

    // Search Result :
    const [searching_movies_result, setSearchingMoviesResult] = useState([]);
    const [searching_tvShows_result, setSearchingTvShowsResult] = useState([]);
    return (
        // We can use the value of user, wherever we want in the components which are inside of the StateContext.Provider
        <StateContext.Provider 
        value={{
            user:[user,setUser],
            movies_popular:[movies,setMovies],
            tvShows_popular:[tvShows,setTvShows],
            searching_tvShows:[searching_tvShows, setSearchingTVShows],
            searching_movies:[searching_movies, setSearchingMovies],
            searching_movies_result:[searching_movies_result, setSearchingMoviesResult],
            searching_tvShows_result:[searching_tvShows_result, setSearchingTvShowsResult],
            search_is_null: [searchIsNull, setSearchIsNull],
            }}>
            {props.children}
        </StateContext.Provider>
    )
}