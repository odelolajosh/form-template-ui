export const Filter = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending',
  DEFAULT: 'default',
};

export const filterByOrder = (data, field, order) => {
  if (order === Filter.DEFAULT) return data;
  const sorted = [...data].sort((d1, d2) => {
    const s1 = d1[field].toLowerCase();
    const s2 = d2[field].toLowerCase();
    if (s1 > s2) return 1;
    if (s1 < s2) return -1;
    return 0;
  });
  if (order === Filter.DESCENDING) { sorted.reverse(); }
  return sorted;
};

export const filterByDate = (data, field, order) => {
  if (order === Filter.DEFAULT) return data;
  const sorted = [...data].sort((d1, d2) => new Date(d1[field]) - new Date(d2[field]));
  if (order === Filter.DESCENDING) { sorted.reverse(); }
  return sorted;
};

export const ALL_CATEGORY = 'all';
export const filterByCategory = (data, field, category) => {
  if (category === 'all') return data;
  return data.filter((d) => d[field].includes(category));
};

export const filterBySearchTerm = (data, term) => data.filter((d) => d.name.includes(term));
