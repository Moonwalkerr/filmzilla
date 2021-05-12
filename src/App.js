import './App.css';
import MoviesPage from './comps/moviespage';
import NavBar from './comps/navbar';
import {useContext,useEffect} from "react";
import TRENDING_API_MOVIES, { TRENDING_API_TVSHOWS } from "./api/api";
import {StateContext,fetchData} from "./context/stateProvider";
import FooterBar from './comps/footer';

function App() {

// Declaring trending movies state and trending tv shows state fetched from context
const [movies,setMovies] = useContext(StateContext).movies_popular;
const [tvShows, setTvShows] = useContext(StateContext).tvShows_popular;
console.log(movies,tvShows);
// const [user, setUser] = useContext([StateContext]).user;

useEffect(()=>{
    fetchData(TRENDING_API_TVSHOWS,setTvShows);
    fetchData(TRENDING_API_MOVIES,setMovies);

},[setMovies,setTvShows])


  return (
    <div className="App">
      <NavBar fetchData={fetchData}/>
      <MoviesPage />
      <FooterBar/>
      </div>
  );
}

export default App;
