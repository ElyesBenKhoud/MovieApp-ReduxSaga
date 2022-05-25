import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { LoadMovie } from "../redux/SagaMovies/action";
//again some style sshould be imported from another files...
const Movie = styled.div`
  overflow-x: auto;
  flex-wrap: nowrap;
  box-sizing: border-box;
`;

const Row = styled.div`
  float: left;
  width: 15%;
  padding: 0 10px;
  @media screen and (max-width: 1175px) {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
`;

const Img = styled.img`
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 300px;
`;
const MoviesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadMovie());
  }, [dispatch]);

  //destruct state from reducer root
  const state = useSelector((state) => ({ ...state.app }));

  // console.log(state);

  return (
    <>
      <Movie>
        {state.loading ? (
          <h6>loading </h6>
        ) : (
          state.movies.map((item, idx) => (
            <Row key={idx}>
              <Card>
                <h6>{item.Title}</h6>
                <Img src={item.Poster} alt={item.Title} />
              </Card>
            </Row>
          ))
        )}
      </Movie>
    </>
  );
};

export default MoviesList;
