import React from "react";
import styled from "styled-components";

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
const RenderResult = ({ result }) => {
  console.log(result.toJS());

  //   const SagasMovies = result.toJS().map((item, idx) => (
  //     <Row key={idx}>
  //       <Card>
  //         <h6>{item.Title}</h6>
  //         <Img src={item.Poster} alt={item.Title} />
  //       </Card>
  //     </Row>
  //   ));

  //   return <>{result.toJS().map((item) => console.log(item.title))}</>;
  return (
    <div>
      {" "}
      hello here results goes , logged just error of immutable js remain then
      map through result and display the searched movies
    </div>
  );
};

export default RenderResult;
