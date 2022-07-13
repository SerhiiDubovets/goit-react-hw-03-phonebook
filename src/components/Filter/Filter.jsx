import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

const SearchFilter = ({ filter, onChange }) => {
  return (
    <FilterLabel>
      {' '}
      Filter
      <FilterInput type="text" value={filter} onChange={onChange}></FilterInput>
    </FilterLabel>
  );
};

export default SearchFilter;

SearchFilter.prototype = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
