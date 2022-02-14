/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CaretIcon, SearchIcon } from '../../assets/svg';
import { CATEGORY, ORDER } from '../../store/constants';
import { setFilters } from '../../store/template/templateSlice';
import { Input } from '../../styles';
import Select from '../select';
import {
  FilterSection, OverlayFilterSection, SearchBox, TopbarWrapper,
} from './TopBar.style';

function Topbar() {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const [visible, setVisible] = useState(false);
  const input = useRef();

  const dispatch = useDispatch();
  useEffect(() => {
    const fn = () => setViewWidth(window.innerWidth);
    window.addEventListener('resize', fn);

    return () => window.removeEventListener('resize', fn);
  }, []);

  useEffect(() => {
    const fn = (e) => {
      if (viewWidth < 955) {
        if (visible) {
          if (input && input.current && !input.current.contains(e.target)) {
            setVisible(false);
          }
        }
      }
    };
    window.addEventListener('click', fn);

    return () => {
      window.removeEventListener('click', fn);
    };
  }, [visible, viewWidth]);

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
      <OverlayFilterSection ref={input} show={visible}>
        <span role="button" onClick={() => setVisible(!visible)}><CaretIcon /></span>
        <div className="drpdwn">
          <span className="text">Sort By: </span>
          <Select label="category" items={CATEGORY} onSelect={(index) => updateFilter({ category: CATEGORY[index] })} />
          <Select label="order" items={ORDER} onSelect={(index) => updateFilter({ order: ORDER[index] })} />
          <Select label="date" items={ORDER} onSelect={(index) => updateFilter({ date: ORDER[index] })} />
        </div>
      </OverlayFilterSection>
    </TopbarWrapper>
  );
}

export default Topbar;
