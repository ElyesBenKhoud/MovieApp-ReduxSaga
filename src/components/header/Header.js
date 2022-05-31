import React from "react";
import styled from "styled-components";
import Search from "./Search";
import { DiJsBadge } from "react-icons/di";
//style should be imported from another file
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 90px;
  width: 100%;
  background: teal;
  @media screen and (max-width: 1183px) {
    height: 100%;
  }
  @media screen and (max-width: 865px) {
    height: 150px;
  }
`;

const HeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 150px;
  @media screen and (max-width: 1183px) {
    margin: 0 auto;
    margin-top: 13px;
    width: 300px;
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
