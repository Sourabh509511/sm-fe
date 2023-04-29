import { useDispatch } from 'react-redux';
import { getCategoryDataThunk } from 'redux/thunk/CategoryThunk';
import { getProductDataThunk } from 'redux/thunk/ProductThunks';

export function useListPage () {
    const dispatch = useDispatch<any>();
    dispatch(getCategoryDataThunk());
    dispatch(getProductDataThunk());
}
