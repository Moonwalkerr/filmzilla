import './App.css';
import MoviesPage from './comps/moviespage';
import NavBar from './comps/navbar';
import {useContext,useEffect} from "react";
import TRENDING_API_MOVIES, { TRENDING_API_TVSHOWS } from "./api/api";
import {StateContext,fetchData} from "./context/stateProvider";
import FooterBar from './comps/footer';
import LoginPage from './comps/login';

function App() {

// Declaring trending movies state and trending tv shows state fetched from context
const [movies,setMovies] = useContext(StateContext).movies_popular;
const [tvShows, setTvShows] = useContext(StateContext).tvShows_popular;

// Fetching the user state from our context API layer 
const [user,setUser] = useContext(StateContext).user;
console.log(setUser);
console.log(movies,tvShows);


useEffect(()=>{
    fetchData(TRENDING_API_TVSHOWS,setTvShows);
    fetchData(TRENDING_API_MOVIES,setMovies);

},[setMovies,setTvShows])


if(!user){
  return <LoginPage/>
}
  return (
    <div className="App">
      <NavBar fetchData={fetchData}/>
      <MoviesPage />
      <FooterBar/>
      </div>
  );
}

export default App;
