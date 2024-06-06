import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";



const usePopularMovies = ()=>{
    const dispath = useDispatch();
    
    const getUpcomingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        dispath(addPopularMovies(json.results));
    }
    useEffect(()=>{
        getUpcomingMovies();
    },[])
};

export default usePopularMovies;