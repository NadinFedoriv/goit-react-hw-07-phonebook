import './Filter.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
  
export function Filter() {
const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  
  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
  <label>
    Find contacts by name
    <input
      className="filter"
      type="text"
      name="filter"
      value={filter}
      onChange={changeFilter}
    />
  </label>
);
 
};