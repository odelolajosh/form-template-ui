import { useSelector } from "react-redux";
import { RightCaretIcon } from "../../assets/svg";
import usePagination from "../../hooks/usePagination";
import { selectStatus, selectTemplates } from "../../store/template/templateSlice";
import TemplateCard from "./TemplateCard";
import { LoadingTemplate, Paginate, PaginateAction, Pagination, Spinner, TemplateGrid, TemplatesInfo } from "./Templates.style";

const Templates = () => {
  const templates = useSelector(selectTemplates)
  const status = useSelector(selectStatus)

  const [data, page, totalPages, prevPage, nextPage] = usePagination(templates)

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
        {data.map((template, index) => <TemplateCard key={index} {...template} />)}
      </TemplateGrid>
      <Pagination>
        <PaginateAction onClick={prevPage}>Previous</PaginateAction>
        <Paginate>
          <span>{page}</span> of {totalPages}
        </Paginate>
        <PaginateAction onClick={nextPage}>Next <span><RightCaretIcon /></span></PaginateAction>
      </Pagination>
    </div>
  )
}

export default Templates;