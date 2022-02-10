import styled from 'styled-components';

export const TopbarWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  padding-inline: 18px;
`;

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
`;

export const FilterSection = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  & > span:nth-child(1) {
    color: #989898;
    text-transform: capitalize;
  }
`;
