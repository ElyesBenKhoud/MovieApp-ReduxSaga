// import "./App.css";
// import axios from "axios";
// import { useEffect } from "react";
import Header from "./components/header/Header";
// import MoviesList from "./components/MoviesList";
import Results from "./components/Results/Results";
// const API_URL = "http://www.omdbapi.com/?s=happy&&apikey=d7b52bbd";

function App() {
  //for testing the API
  // useEffect(() => {
  //   axios.get(API_URL).then((res) => console.log(res.data.Search));
  // }, []);
  return (
    <div className="App">
      <Header />
      <Results />
      {/* <MoviesList /> */}
    </div>
  );
}

export default App;
