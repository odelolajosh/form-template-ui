import PropType from 'prop-types';
import styled from 'styled-components';

function TemplateCard({ name, description, link }) {
  return (
    <Template>
      <div>
        <TemplateHeader>{ name }</TemplateHeader>
        <TemplateText>{ description }</TemplateText>
      </div>
      <TemplateBottom>
        <a href={link}>Use Template</a>
      </TemplateBottom>
    </Template>
  );
}

TemplateCard.propTypes = {
  name: PropType.string.isRequired,
  description: PropType.string.isRequired,
  link: PropType.string.isRequired,
};

const Template = styled.div`
  height: 229px;
  border-radius: 2px;
  box-shadow: 0px 4px 30px 0px #00000014;
  background: white;
  display: flex;
  flex-direction: column;

  & > div:nth-child(1) {
    flex: 1;
  }
`;

const TemplateHeader = styled.h3`
  font-size: ${(props) => props.theme.font.larger}px;
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
  margin: 19px;
  margin-top: 17px;
  padding: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;

const TemplateText = styled.p`
  font-size: ${(props) => props.theme.font.normal}px;
  font-family: 'Inter';
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.colors.header};
  margin: 19px;
  padding: 0;
  display: -webkit-box;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;

const TemplateBottom = styled.div`
  padding: 11px 22px;
  background: #F9F9F9;

  & > a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.success};
  }
`;

export default TemplateCard;
