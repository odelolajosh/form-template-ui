/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Input = styled.input`
  height: 45px;
  border-radius: 2px;
  padding: 13px 32px;
  border: 0.5px solid ${(props) => props.theme.colors.input};
  font-size: ${(props) => props.theme.font.normal}px;
  font-weight: 300;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }
`;
