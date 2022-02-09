import styled from "styled-components";

export const TopbarWrapper = styled.section`
  display: flex;
  justify-content: space-between;
`

export const SearchBox = styled.section`
  position: relative;
  width: 319px;
  height: 45px;

  & > input {
    width: 100%;
    height: 100%;
  }

  & > span {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 46px;
    display: grid;
    place-items: center;
  }
`