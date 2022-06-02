import React, { useMemo } from "react";
import styled from "styled-components";

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

const RenderResult = ({ result }) => {
  const renderedList = useMemo(
    () => (
      <Row>
        <Card>
          <Img src={result.toJS().Poster} alt={result.toJS().Title} />
        </Card>
      </Row>
    ),
    [result]
  );

  return (
    <>
      <Movie>{renderedList}</Movie>
    </>
  );
};

export default RenderResult;
