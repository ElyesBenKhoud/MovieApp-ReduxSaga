import React from "react";
import MoviesList from "../MoviesList";
import Results from "../Results/Results";
import "../../App.css";
import { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const AppViewStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
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
const Buttonet = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const AppView = (props) => {
  const [admin, setAdmin] = useState(false);
  const ChangeAdmin = () => {
    setAdmin(!admin);
  };
  return (
    <>
      <Buttonet>
        {console.log(props)}
        {!admin ? (
          <Button onClick={ChangeAdmin}> Connect</Button>
        ) : (
          <Button onClick={ChangeAdmin}> Disconnect</Button>
        )}
      </Buttonet>
      <AppViewStyle>
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
      </AppViewStyle>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAdmin: state.app.isAdmin,
  };
};

export default connect(mapStateToProps)(AppView);
