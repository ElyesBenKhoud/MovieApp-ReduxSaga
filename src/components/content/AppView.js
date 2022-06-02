import React from "react";
import MoviesList from "../MoviesList";
import Results from "../Results/Results";
import "../../App.css";
import { useState } from "react";
import styled from "styled-components";
const Button = styled.button`
  background: black;
  color: white;
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 110px;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
  }
  media screen and (max-width: 740px) {
    position: absolute;
    right: 0;
    margin-right: 0;
    margin-top: 0;
  }
`;
const AppView = () => {
  const [admin, setAdmin] = useState(false);
  const ChangeAdmin = () => {
    setAdmin(!admin);
  };
  return (
    <>
      {!admin ? (
        <Button onClick={ChangeAdmin}> Connect</Button>
      ) : (
        <Button onClick={ChangeAdmin}> Disconnect</Button>
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
