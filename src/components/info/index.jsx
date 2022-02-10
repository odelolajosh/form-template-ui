import styled from 'styled-components';
import { InfoIcon } from '../../assets/svg';

const info = () => (
  <InfoParagraph>
    <span><InfoIcon /></span>
    {' '}
    Tada! Get started with a free template. Can’t find what you are looking for?
    Search from the 1000+ available templates
  </InfoParagraph>
);

const InfoParagraph = styled.p`
  background: ${(props) => props.theme.colors.info};
  padding: 14px;
  border-radius: 2px;
  margin-top: 45px; // 85px
  margin-bottom: 43px; // 63px
  margin-inline: 18px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #252525;

  & > span {
    margin-right: 10px;
  }
`;

export default info;
