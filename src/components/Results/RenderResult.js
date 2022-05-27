import React from "react";
import styled from "styled-components";

const Row = styled.div`
  float: left;
  width: 15%;
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
  height: 100%;
  width: 80%;
`;
const RenderResult = ({ result }) => {
  //   console.log(result.toJS().Title);

  return (
    <>
      {console.log(result.toJS().Title)}
      <Row>
        <Card>
          <h6>{result.toJS().Title}</h6>
          <Img src={result.toJS().Poster} alt={result.toJS().Title} />
        </Card>
      </Row>
    </>
  );
};

export default RenderResult;
