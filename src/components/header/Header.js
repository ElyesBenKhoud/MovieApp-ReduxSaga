import React from "react";
import styled from "styled-components";

//style should be imported from another file
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 90px;
  width: 100%;
  background: #1e2028;
  @media screen and (max-width: 1183px) {
    height: 100%;
  }
  @media screen and (max-width: 865px) {
    height: 190px;
  }
`;
const HeaderText = styled.h1`
  margin: 6px 0 0 0;
  font-size: 26px;
  font-weight: 300;
  color: #f4f4f4;
  opacity: 0.93;
  &:hover {
    opacity: 1;
  }
`;
const HeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  @media screen and (max-width: 1183px) {
    margin: 0 auto;
    margin-top: 13px;
    width: 300px;
  }
`;
const HeaderLogoButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  font: inherit;
  outline: none;
  cursor: pointer;
`;
const Features = styled.h6`
  color: white;
`;

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderLogoWrapper>
          <HeaderLogoButton>
            {/* <HeaderLogo src="" alt="logo" /> */}
            <HeaderText>Movies App</HeaderText>
          </HeaderLogoButton>
        </HeaderLogoWrapper>
        <Features> Some feature should be here like search or filters</Features>
      </HeaderWrapper>
    </>
  );
};

export default Header;
