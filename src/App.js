// import "./App.css";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import MoviesList from "./components/MoviesList";
const API_URL = "http://www.omdbapi.com/?s=happy&&apikey=d7b52bbd";
function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get(API_URL).then((res) => setData(res.data.Search));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      {console.log(data)}
      <MoviesList data={data} />
    </div>
  );
}

export default App;
