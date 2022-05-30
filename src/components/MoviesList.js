import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { LoadMovie } from "../redux/SagaMovies/action";
import { LoadOtherMovies } from "../redux/OtherMovies/action";
//again some style should be imported from another files...
const Movie = styled.div`
  overflow-x: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Row = styled.div`
  float: left;
  width: 25%;
  @media screen and (max-width: 1175px) {
    width: 70%;
    display: block;
    margin-bottom: 20px;
  }
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 6px;
  text-align: center;
  background-color: #f1f1f1;
`;

const Img = styled.img`
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  width: 80%;
`;
const MoviesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadMovie());
    dispatch(LoadOtherMovies());
  }, [dispatch]);

  //destruct state from reducer root
  const state = useSelector((state) => ({ ...state.app }));
  const state2 = useSelector((state) => ({ ...state.app2 }));
  // console.log(searchedMovies);

  const SagasMovies = state.loading ? (
    <h6>Data is Loading ... </h6>
  ) : (
    state.movies.map((item, idx) => (
      <Row key={idx}>
        <Card>
          <Img src={item.Poster} alt={item.Title} />
        </Card>
      </Row>
    ))
  );

  const SagasOtherMovies = state2.loading ? (
    <h6>Data is Loading ... </h6>
  ) : (
    state2.movies.map((item, idx) => (
      <Row key={idx}>
        <Card>
          <Img src={item.Poster} alt={item.Title} />
        </Card>
      </Row>
    ))
  );

  return (
    <>
      <h2> First Saga call</h2>
      <Movie>{SagasMovies}</Movie>
      <br />
      <h2> Second Saga call</h2>
      <Movie>{SagasOtherMovies}</Movie>
    </>
  );
};

export default MoviesList;
