import { ALL_CATEGORY, Filter } from './templateFilter';
import templateReducer, { setFilters } from './templateSlice';

const initialState = {
  value: [],
  status: 'idle',
  filters: {
    category: ALL_CATEGORY,
    date: Filter.DEFAULT,
    order: Filter.DEFAULT,
    search: '',
  }
};

describe('template reducer', () => {
  it('should handle initial state', () => {
    expect(templateReducer(undefined, { type: 'unknown' })).toEqual({
      value: [],
      status: 'idle',
      filters: {
        category: ALL_CATEGORY,
        date: Filter.DEFAULT,
        order: Filter.DEFAULT,
        search: '',
      },
    });
  });

  it('should handle filter change', () => {
    const actual = templateReducer(initialState, setFilters({ category: 'education', order: Filter.ASCENDING }));
    expect(actual.filters).toEqual({
      category: 'education',
      date: Filter.DEFAULT,
      order: Filter.ASCENDING,
      search: '',
    });
  });
});
