import { useSelector } from 'react-redux';
import { RightCaretIcon } from '../../assets/svg';
import usePagination from '../../hooks/usePagination';
import { Filter } from '../../store/template/templateFilter';
import { selectFilteredTemplate, selectFilters, selectStatus } from '../../store/template/templateSlice';
import TemplateCard from './TemplateCard';
import {
  LoadingTemplate, Paginate, PaginateAction, Pagination,
  Spinner, TemplateGrid, TemplateScroll, TemplatesInfo, TemplateWrapper,
} from './Templates.style';

function Templates() {
  const templates = useSelector(selectFilteredTemplate);
  const filters = useSelector(selectFilters);
  const status = useSelector(selectStatus);

  const [data, page, totalPages, prevPage, nextPage] = usePagination(templates);

  if (status === 'loading') {
    return (
      <LoadingTemplate>
        <Spinner />
      </LoadingTemplate>
    );
  }

  return (
    <TemplateWrapper style={{ width: '100%' }}>
      <TemplatesInfo>
        <span>
          {filters.category}
          {' '}
          Templates
        </span>
        <small>
          {templates.length || 0}
          {' '}
          templates
          {filters.category !== Filter.DEFAULT && ' found'}
        </small>
      </TemplatesInfo>
      <TemplateScroll>
        <TemplateGrid>
          {data.map((template, index) => <TemplateCard key={`template-card-${index}`} {...template} />)}
        </TemplateGrid>
        <Pagination>
          <PaginateAction onClick={prevPage}>Previous</PaginateAction>
          <Paginate>
            <span>{page}</span>
            of
            {' '}
            {totalPages}
          </Paginate>
          <PaginateAction onClick={nextPage}>
            Next
            <span><RightCaretIcon /></span>
          </PaginateAction>
        </Pagination>
      </TemplateScroll>
    </TemplateWrapper>
  );
}

export default Templates;
