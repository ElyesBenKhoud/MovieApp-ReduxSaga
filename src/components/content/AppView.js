import React from "react";
import MoviesList from "../MoviesList";
import Results from "../Results/Results";
import "../../App.css";
import { useState } from "react";
const AppView = () => {
  const [admin, setAdmin] = useState(false);
  const ChangeAdmin = () => {
    setAdmin(!admin);
  };
  return (
    <>
      {!admin ? (
        <button onClick={ChangeAdmin}> Connect to access movies</button>
      ) : (
        <button onClick={ChangeAdmin}> Disconnect</button>
      )}

      {admin ? (
        <div className="container">
          <div className="panel">
            <Results />
          </div>
          <div className="panel">
            <MoviesList />
          </div>
        </div>
      ) : (
        <h1>connect please</h1>
      )}
    </>
  );
};

export default AppView;
