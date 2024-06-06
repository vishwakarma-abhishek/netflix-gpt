
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = ()=>{

        useNowPlayingMovies();
        useUpcomingMovies();
        usePopularMovies();
        useTopRatedMovies();
        
        

    return (
        <div className='overflow-hidden scrollbar-hide'>
        
            <Header></Header>
            <MainContainer/>
            <SecondaryContainer/>

        </div>

);
};

export default Browse;