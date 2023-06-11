
import css from './Filter.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getValueFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/slice';


export const Filter = () => {
    const contacts = useSelector(getValueFilter)
    const dispatch = useDispatch();


const onChangeFilter = (event) => {
    dispatch(setStatusFilter(event.target.value.toLowerCase()))
}

return (
    <label className={css.filterLable}>
    Find contacts by name
    <input className={css.filterInput} 
    type="text" 
    value={contacts} 
    onChange={onChangeFilter}
    >
    </input>
    </label>
)
}
