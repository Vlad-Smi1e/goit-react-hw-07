import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/slice/filter';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();
    const name = e.target.value;
    dispatch(setFilter(name));
  };

  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        className={css.filterName}
        type="text"
        placeholder="Enter name"
        onChange={handleChange}
        name="name"
        autoComplete="off"
      />
    </div>
  );
};
