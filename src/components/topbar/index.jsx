import { useDispatch } from 'react-redux';
import { SearchIcon } from '../../assets/svg';
import { CATEGORY, ORDER } from '../../store/constants';
import { setFilters } from '../../store/template/templateSlice';
import { Input } from '../../styles';
import Select from '../select';
import { FilterSection, SearchBox, TopbarWrapper } from './TopBar.style';

function Topbar() {
  const dispatch = useDispatch();
  const updateFilter = (filter) => {
    dispatch(setFilters(filter));
  };
  return (
    <TopbarWrapper>
      <SearchBox>
        <Input placeholder="Search Templates" onChange={(e) => updateFilter({ search: e.target.value })} />
        <span><SearchIcon /></span>
      </SearchBox>
      <FilterSection>
        <span>Sort By: </span>
        <Select label="category" items={CATEGORY} onSelect={(index) => updateFilter({ category: CATEGORY[index] })} />
        <Select label="order" items={ORDER} onSelect={(index) => updateFilter({ order: ORDER[index] })} />
        <Select label="date" items={ORDER} onSelect={(index) => updateFilter({ date: ORDER[index] })} />
      </FilterSection>
    </TopbarWrapper>
  );
}

export default Topbar;
