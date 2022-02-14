import styled from 'styled-components';

export const TopbarWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  ${'' /* flex-wrap: wrap; */}
  gap: 10px;
  padding-inline: 18px;
`;

export const SearchBox = styled.section`
  position: relative;
  width: 319px;
  height: 45px;

  @media screen and (max-width: 400px) {
    flex: 1
  }

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

  @media (max-width: 955px) {
    display: none;
  }
`;

export const OverlayFilterSection = styled.div`
  position: relative;
  display: none;

  & > span {
    height: 100%;
    display: grid;
    place-items: center;
    cursor: pointer;
  }

  & > .drpdwn {
    position: absolute;
    right: -5px;
    top: calc(100% + 10px);
    width: calc(100vw - 18px);
    max-width: calc(100vw - 18px);
    display: flex;
    flex-flow: nowrap column;
    gap: 10px;
    background: white;
    padding: 1rem 10px;
    box-shadow: 0px 4px 30px 0px #00000014;
    transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
    transform: translateY(-10px);
    opacity: 0;
    visibility: hidden;
    ${({ show = false }) => show && `
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    `}
    z-index: 1;

    & > span {
      display: block;
    }

    & > span.text {
      color: #989898;
      text-transform: capitalize;
    }

    & span.slt-elem {
      width: 100%;
      margin-block: .5rem;
    }
  }

  @media (max-width: 955px) {
    display: block;
  }
`;
