 
// import Header from '../components/Header';
import Herosection from '../components/Herosection';
// import Footer from '../components/Footer'; 
import SearchBar from '../components/SearchBar';
import Movies from '../components/Movies'; 
import Adsection from '../components/Adsection';
import MovieApi from '../components/MovieApi';

function HomePage() {
   

  return (
    <>
        
       <Herosection/> 
       <Adsection/>
       <SearchBar/>
       <Movies/>
       <MovieApi/>
        
    </>
  );
}

export default HomePage;
  
 