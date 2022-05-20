import "./App.css";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "http://www.omdbapi.com/?s=star wars&&apikey=d7b52bbd";
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
      {data &&
        data.map((item, idx) => (
          <div key={idx}>
            <h6>{item.Title}</h6>
            <img src={item.Poster} alt={item.Title} />
          </div>
        ))}
    </div>
  );
}

export default App;
