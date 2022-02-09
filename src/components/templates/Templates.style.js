import styled from "styled-components";

export const TemplatesInfo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 23px;

  & > span {
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.font.large}px;
  }

  & > small {
    color: #989898;
  }
`

export const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(308px, 1fr));
  grid-gap: 65px;
  width: 100%;
`

export const LoadingTemplate = styled.div`
  height: calc(100vh - 300px);
  display: grid;
  place-items: center;
`

export const Spinner = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top: 2px solid ${props => props.theme.colors.success};
  animation: spin 500ms linear infinite;

  @keyframes spin {
    from: {
      transform: rotate(0)
    }
    to {
      transform: rotate(360deg)
    }
  }
`