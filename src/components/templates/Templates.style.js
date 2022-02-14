import styled from 'styled-components';

export const TemplatesInfo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 18px;
  margin-bottom: 8px;

  @media (max-width: 410px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  & > span {
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.font.large}px;
    text-transform: capitalize;
  }

  & > small {
    color: #989898;
  }
`;

export const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 65px;
  width: 100%;
`;

export const LoadingTemplate = styled.div`
  height: calc(100vh - 300px);
  display: grid;
  place-items: center;
`;

export const TemplateWrapper = styled.div.attrs({
  className: 'scroll',
})`
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex: 1;
  margin-top: 43px; // 63px
`;

export const TemplateScroll = styled.div.attrs({
  className: 'scroll',
})`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-inline: 8px;
  padding-top: 23px;
`;

export const Spinner = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top: 2px solid ${(props) => props.theme.colors.success};
  animation: spin 500ms linear infinite;

  @keyframes spin {
    from: {
      transform: rotate(0)
    }
    to {
      transform: rotate(360deg)
    }
  }
`;

export const Pagination = styled.div`
  width: 965px;
  max-width: calc(100% - 20px);
  display: flex;
  justify-content: space-between;
  margin: 72px auto 400px auto;
  font-size: ${(props) => props.theme.font.large}px;
`;

export const Paginate = styled.span`
  display: flex;
  align-items: center;

  & > span {
    background: #FFFFFF;
    border: 1px solid #3F3F3F;
    border-radius: 3px;
    padding: 4px 11px;
    margin-right: 12px;
  }
`;

export const PaginateAction = styled.span`
  font-weight: 500;
  font-size: ${(props) => props.theme.font.large}px;
  cursor: pointer;
  user-select: none;

  & > span {
    margin-left: 12px;
  }
`;
