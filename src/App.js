// import Navbar from './component/Navbar';
import ROW from "./component/ROW";
import Banner from "./component/Banner";
import request from "./request";
import "./App.css";
// import { BrowserRouter , Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Banner fetchUrl={request.fetchTrending} />
      {/* <ROW
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeROW={true}

        //  isLargeRow is prop used in special case scenario only for netflix originals,sinse we have to make it bit larger
      />
      <ROW title="TRENDING NOW" fetchUrl={request.fetchTrending} />

      <ROW title="TOP RATED" fetchUrl={request.fetchTopRated} />
      <ROW title="ACTION" fetchUrl={request.fetchActionMovies} />
      <ROW title="COMEDY" fetchUrl={request.fetchComediesMovies} />
      <ROW title="HORROR" fetchUrl={request.fetchHorrorMovies} />
      <ROW title="ROMANCE" fetchUrl={request.fetchRomanceMovies} />
      <ROW title="DOCUMENTRIES" fetchUrl={request.fetchDocumentaries} /> */}
    </div> 
  );
}

export default App;
