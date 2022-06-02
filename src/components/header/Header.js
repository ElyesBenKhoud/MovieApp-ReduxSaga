import React from "react";
import styled from "styled-components";
import Search from "./Search";
import { DiJsBadge } from "react-icons/di";
//style should be imported from another file
// const HeaderWrapper = styled.header`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   height: 90px;
//   width: 100%;
//   background: teal;
//   @media screen and (max-width: 1183px) {
//     height: 100%;
//   }
//   @media screen and (max-width: 865px) {
//     height: 100%;
//   }
// `;

const HeaderWrapper = styled.header`
  display: flex;
  width: 100vw;
  margin: auto;
  max-width: 2800px;
  justify-content: space-between;
  text-align: center;
  background: teal;
  cursor: pointer;
  min-width: 80px;
`;

const HeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 150px;
  @media screen and (max-width: 1183px) {
    float: left;
    margin-top: 8px;
  }
`;
const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderLogoWrapper>
          <DiJsBadge onClick={() => window.location.reload(false)} />
        </HeaderLogoWrapper>
        <Search />
      </HeaderWrapper>
    </>
  );
};

export default Header;
