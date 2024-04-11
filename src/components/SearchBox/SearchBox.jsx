import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);
  const handleSerach = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.container}>
      <p className={css.label}>Search by name</p>
      <input
        type="text"
        className={css.input}
        value={value}
        onChange={handleSerach}
      />
    </div>
  );
}
