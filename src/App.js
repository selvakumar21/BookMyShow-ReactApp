
import './App.css';
import Header from'./components/Header/Header';
import SliderImages from './components/SilderImages';
import CardsSlider from './components/CardsSlider'; 
import PremiereSlider from './components/PremiereSlider';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import AllMovies from './components/AllMovies';
import SingleMovieFetch from './components/SingleMovieFetch';
import AllMoviesFetch from './components/AllMoviesFetch';
import UserRegisteration from './components/UserRegisteration';

 

function App() {
  return (
     <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/movies">
          <AllMoviesFetch/>
          </Route>
          <Route exact path="/movies/:movid">
          <SingleMovieFetch/>
          </Route>
          <Route exact path="/Signup">
          <UserRegisteration/>
          </Route>
          <Route exact path="/">
          <SliderImages/>
          <CardsSlider/>
          <PremiereSlider/>
          </Route>
        </Switch>
        <Footer/>
      </div>
      </Router>  

  );
}

export default App;
