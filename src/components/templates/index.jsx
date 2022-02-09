import { useSelector } from "react-redux";
import usePagination from "../../hooks/usePagination";
import { selectStatus, selectTemplates } from "../../store/template/templateSlice";
import TemplateCard from "./TemplateCard";
import { LoadingTemplate, Spinner, TemplateGrid, TemplatesInfo } from "./Templates.style";

const Templates = () => {
  const templates = useSelector(selectTemplates)
  const status = useSelector(selectStatus)

  const [data] = usePagination(templates, 1, 15)
  console.log({ data })

  if (status === 'loading') {
    return (<LoadingTemplate>
      <Spinner />
    </LoadingTemplate>)
  }

  return (
    <div style={{ width: '100%' }}>
      <TemplatesInfo>
        <span>All Templates</span>
        <small>{templates.length} templates</small>
      </TemplatesInfo>
      <TemplateGrid>
        {
          data.map((template, index) => <TemplateCard key={index} {...template} />)
        }
      </TemplateGrid>
    </div>
  )
}

export default Templates;