import Header from "./components/header/Header";
import MoviesList from "./components/MoviesList";
import Results from "./components/Results/Results";
// import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="panel">
          <Results />
        </div>
        <div className="panel2">
          <MoviesList />
        </div>
      </div>
    </>
  );
}

export default App;
