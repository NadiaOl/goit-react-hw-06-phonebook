
import css from './Filter.module.css';
import { useDispatch } from "react-redux";
// import { setFilter } from "redux/actions";
import { setStatusFilter } from 'redux/contactSlice';
// import { getValueFilter } from 'redux/selectors';


export const Filter = () => {
    // const contacts = useSelector(getValueFilter)
    const dispatch = useDispatch();


const onChangeFilter = (event) => {
    dispatch(setStatusFilter(event.target.value.toLowerCase()))
}

return (
    <label className={css.filterLable}>
    Find contacts by name
    <input className={css.filterInput} 
    text="text" 
    // value={contacts} 
    onChange={onChangeFilter}
    >
    </input>
    </label>
)
}
